import { Lock } from 'lucide-react'
import InputText from '../ui/forms/InputText'
import Button from '../ui/forms/Button'

export default function SecuritySettingsForm() {
    return (
        <div className='lg:max-w-1/2 md:w-full'>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <InputText
                            type="password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="••••••••"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password
                    </label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <InputText
                            type="password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="••••••••"
                        />
                    </div>
                </div>
            </div>
            <Button
                type='submit'
                className='w-52 mt-5'
                onClick={() => { }}
            >
                Update Password
            </Button>
        </div>
    )
}
