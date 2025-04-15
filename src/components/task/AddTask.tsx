import InputText from '../ui/forms/InputText';
import Button from '../ui/forms/Button';
import Select, { SelectInstance } from 'react-select';
import { X } from 'lucide-react';
import { useRef, useState } from 'react';

const options = [
    { value: 'To Do', label: 'To Do' },
    { value: 'In Progress', label: 'In Progress' },
    { value: 'Done', label: 'Done' },
    { value: 'Cancelled', label: 'Cancelled' }

]

const users = [
    { value: 'John Doe', label: 'John Doe', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" },
    { value: 'Jane Smith', label: 'Jane Smith', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" },
    { value: 'Alice Johnson', label: 'Alice Johnson', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" },
    { value: 'Bob Brown', label: 'Bob Brown', avatar: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" }
]

export default function AddTask({
    isModalOpen,
    closeModal,
    targetTask,

}: {
    isModalOpen: boolean;
    closeModal: () => void;
    targetTask?: string;
}) {
    const [assigned, setAssigned] = useState<{ value: string, label: string } | undefined>();

    const selectRef = useRef<SelectInstance | null>(null)

    const handleAssign = (selectedOption: { value: string, label: string }) => {
        if (selectedOption) {
            setAssigned(selectedOption);
        }
    }

    const handleRemoveAssign = () => {
        setAssigned(undefined)
        selectRef.current?.clearValue();
    }

    return (
        <div>
            {isModalOpen && (
                <div className="fixed inset-0 bg-blue-950/80 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                        <h2 className="text-xl font-bold mb-4">📝 Add {targetTask || "New"} Task </h2>
                        <form>
                            <div className="mb-4">
                                <InputText
                                    onChange={() => { }}
                                    type="text"
                                    placeholder="Enter task name"
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className="w-full border border-gray-300 rounded pl-5 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter task description"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <Select
                                    defaultValue={targetTask ? options.find((option) => option.value === targetTask) : null}
                                    // defaultInputValue='In Progress'
                                    options={options}
                                    placeholder={"Current Status"} />
                            </div>
                            <div className="mb-4">
                                <Select
                                    ref={selectRef}

                                    options={users}
                                    placeholder={"Assign"}
                                    onChange={handleAssign as any}
                                />
                            </div>
                            {assigned && <div className='flex items-center gap-3 bg-blue-300/50 p-2 rounded-full mb-4'>
                                <img
                                    src={"https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg"} alt="task"
                                    className='w-10 h-10 object-cover rounded-full ring-2 ring-white' />
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
