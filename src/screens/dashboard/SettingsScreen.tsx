import { useState } from "react";
import SettingToggleBar from "../../components/settings/SettingToggleBar";
import { SettingsMenuTabs } from "../../types/types";
import GeneralSettingsForm from "../../components/settings/GeneralSettingsForm";
import SecuritySettingsForm from "../../components/settings/SecuritySettingsForm";

export default function SettingsScreen() {
    const [activeTab, setActiveTab] = useState<SettingsMenuTabs>(SettingsMenuTabs.General);

    return (
        <div>
            {/* header*/}
            <div>
                <img src="https://online-audio-converter.com/files/crop/1020x416/blog/covers/584ca172e1f779e8b87c1cbe16d78a804b704456.jpg" alt="Settings"
                    className='w-full h-64 rounded-xl object-cover' />
                <view className='flex '>
                    <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2494/live/cc0a6500-0c00-11ed-93ba-314ede9cd985.jpg" alt="Profile"
                        className='w-32 h-32 rounded-full ring-8 ring-white  object-cover -translate-y-16 ml-20' />
                    <h1 className='text-3xl font-semibold text-[#232360] ml-10 mt-5'>John Doe</h1>
                </view>
            </div>
            <div className="mx-20">
                <SettingToggleBar activeTab={activeTab} onClick={setActiveTab} />
                {activeTab === SettingsMenuTabs.General && <GeneralSettingsForm />}
                {activeTab === SettingsMenuTabs.Security && <SecuritySettingsForm />}
            </div>
        </div>
    )
}
