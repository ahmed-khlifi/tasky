import { SettingsMenuTabs } from '../../types/types'

export default function SettingToggleBar({ activeTab, onClick }: { activeTab: SettingsMenuTabs, onClick: (tab: SettingsMenuTabs) => void }) {
    return (
        <div className='flex items-center gap-5 mb-10'>
            {Object.values(SettingsMenuTabs).map((tab) => (
                <p
                    key={tab}
                    onClick={() => onClick(tab)}
                    style={{
                        cursor: 'pointer',
                        fontWeight: activeTab === tab ? 'bold' : 'normal',
                        color: activeTab === tab ? '#232360' : '#6A7181',
                        fontSize: '18px',
                    }}
                >
                    {tab}
                </p>
            ))}
        </div>
    )
}
