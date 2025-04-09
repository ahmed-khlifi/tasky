import { ArrowRight, Lock, Mail, User } from 'lucide-react';
import { FormEvent, useState } from 'react'
import InputText from '../ui/forms/InputText';
import Button from '../ui/forms/Button';
import useAuth from '../../hooks/useAuth';

export default function RegisterForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState('');

    const { registerHandler } = useAuth();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (


        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                </label>
                <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <InputText
                        type="text"
                        value={name}
                        onChange={setName}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your name"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                </label>
                <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <InputText
                        type="email"
                        value={email}
                        onChange={setEmail}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your email"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                </label>
                <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <InputText
                        type="password"
                        value={password}
                        onChange={setPassword}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Create a password"
                    />
                </div>
            </div>

            <Button
                onClick={registerHandler}
                type="submit"
            >
                Create account
                <ArrowRight className="w-4 h-4" />
            </Button>
        </form>

    )
}
