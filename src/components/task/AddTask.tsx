import InputText from '../ui/forms/InputText';
import Button from '../ui/forms/Button';
import Select, { SelectInstance } from 'react-select';
import { X } from 'lucide-react';
import { useRef, useState } from 'react';
import { task } from '../../types/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { addTask } from '../../api/task';
import { getAllUsers } from '../../api/user';

const options: Array<{ label: string, value: task["status"] }> = [
    { value: 'ToDo', label: 'To Do' },
    { value: 'pending', label: 'In Progress' },
    { value: 'completed', label: 'Done' },
    { value: 'cancelled', label: 'Cancelled' }

]

/**
 const users = [
    { value: '123', label: 'John Doe', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" },
    { value: '456', label: 'Jane Smith', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" },
    { value: '789', label: 'Alice Johnson', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" },
    { value: '753', label: 'Bob Brown', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" }
]
 */

export default function AddTask({
    isModalOpen,
    closeModal,
    targetTask,

}: {
    isModalOpen: boolean;
    closeModal: () => void;
    targetTask?: task["status"];
}) {
    const [data, setData] = useState<Omit<task, "_id" | "date">>({
        title: "",
        description: "",
        status: targetTask ? targetTask : "ToDo"
    });
    const [assigned, setAssigned] = useState<{ value: string, label: string } | undefined>();

    const { data: users } = useQuery({
        queryFn: getAllUsers,
        queryKey: ["users"],
    })


    const selectRef = useRef<SelectInstance | null>(null)

    const handleChange = ({ name, value }: { name: string; value: string }) => {
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAssign = (selectedOption: { value: string, label: string }) => {
        if (selectedOption) {
            setAssigned(selectedOption);
        }
    }

    const handleRemoveAssign = () => {
        setAssigned(undefined)
        selectRef.current?.clearValue();
    }

    const { mutate, isPending } = useMutation({
        mutationFn: addTask, onSuccess: () => {
            console.log("Task added successfully");
            closeModal();
        }
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!data.title || !data.description || !data.status) {
            alert("Please fill in all fields and assign a user.");
            return;
        }
        let submittedData: task = { ...data as task };
        if (assigned?.value) {
            submittedData.assignedTo = assigned.value;
        }
        mutate(submittedData);
    };

    return (
        <div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-blue-950/80 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h2 className="text-xl font-bold mb-4">📝 Add {targetTask || "New"} Task </h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <InputText
                                    onChange={(v) => handleChange({ name: "title", value: v })}
                                    type="text"
                                    placeholder="Enter task title"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className="w-full border border-gray-300 rounded pl-5 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter task description"
                                    onChange={(e) => handleChange({ name: "description", value: e.target.value })}
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <Select
                                    defaultValue={targetTask ? options.find((option) => option.value === targetTask) : null}
                                    options={options}
                                    onChange={(selectedOption) => {
                                        if (selectedOption) {
                                            handleChange({ name: "status", value: selectedOption.value });
                                        }
                                    }}
                                    placeholder={"Current Status"} />
                            </div>
                            <div className="mb-4">
                                <Select
                                    ref={selectRef}
                                    value={assigned}
                                    options={users}
                                    placeholder={"Assign"}
                                    onChange={handleAssign as any}
                                />
                            </div>
                            {assigned && <div className='flex items-center gap-3 bg-blue-300/50 p-2 rounded-full mb-4'>
                                {/**
                                 * <img
                                    src={assigned?.avatar} alt="task"
                                    className='w-10 h-10 object-cover rounded-full ring-2 ring-white' />
                                 */}
                                <div
                                    className='w-10 h-10 object-cover rounded-full ring-2 ring-white flex items-center justify-center bg-blue-300'
                                >
                                    <p>{assigned?.label['0']?.toUpperCase()}</p>
                                </div>
                                <p className='text-sm font-semibold'>{assigned?.label}</p>
                                <div
                                    onClick={handleRemoveAssign}
                                    className='cursor-pointer bg-blue-300 p-1 rounded-full ml-auto mr-5'>
                                    <X size={16} />
                                </div>
                            </div>}
                            <div className="flex justify-end gap-5">
                                <Button
                                    className="mr-2"
                                    onClick={closeModal}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    isLoading={isPending}
                                    type="submit"
                                >
                                    Add Task
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
