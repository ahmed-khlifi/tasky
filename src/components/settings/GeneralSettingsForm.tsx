import Button from '../ui/forms/Button'
import InputText from '../ui/forms/InputText'

export default function GeneralSettingsForm() {
    return (
        <div className='lg:max-w-1/2 md:w-full'>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                    </label>
                    <div className="relative">
                        <InputText
                            type="password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <div className="relative">
                        <InputText
                            disabled
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>
            </div>
            <Button
                type='submit'
                className='w-52 mt-5'
                onClick={() => { }}
            >
                Save Changes
            </Button>
        </div>
    )
}
