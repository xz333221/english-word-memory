import React, { useState, useEffect } from 'react';
import { prefixes, getPrefixInfo } from './word';
import './index.css';
import { Switch } from 'antd'; // 使用 Ant Design 的 Switch 组件

interface PrefixInfo {
    prefix: any;
    explanation: string;
    examples: string[];
}

const Prefix: React.FC = () => {
    const [prefixIndex, setPrefixIndex] = useState(0); // 当前前缀索引
    const [currentPrefix, setCurrentPrefixIndex] = useState(''); //
    const [prefixInfo, setPrefixInfo] = useState<PrefixInfo | null>(null);
    const [showAllPrefixes, setShowAllPrefixes] = useState(false); // 是否显示所有前缀
    const [rememberedPrefixes, setRememberedPrefixes] = useState<Set<string>>(
        new Set(JSON.parse(localStorage.getItem('rememberedPrefixes') || '[]'))
    );



    // 获取当前前缀
    const currentPrefixList = showAllPrefixes ? prefixes : prefixes.filter(p => !rememberedPrefixes.has(p) || p === currentPrefix);
    const actualPrefixList = showAllPrefixes ? prefixes : prefixes.filter(p => !rememberedPrefixes.has(p));
    const prefix = currentPrefixList[prefixIndex];
    let totalPrefixes = actualPrefixList.length;
    const currentPrefixNumber = prefixIndex + 1;

    // 切换前缀
    const changePrefix = (direction: 'prev' | 'next') => {
        setPrefixIndex((prevIndex) => {
            let newIndex;
            if (direction === 'prev') {
                newIndex = prevIndex > 0 ? prevIndex - 1 : totalPrefixes - 1;
            } else {
                newIndex = prevIndex < totalPrefixes - 1 ? prevIndex + 1 : 0;
                if(currentPrefix) newIndex -= 1;
            }
            setPrefixInfo(null); // 清空前缀信息
            setCurrentPrefixIndex('');
            return newIndex;
        });
    };

    // 处理点击事件，获取前缀信息
    const handleClick = () => {
        const info = getPrefixInfo(prefix);
        setPrefixInfo(info);
    };

    // 处理按钮点击事件
    const handleRemember = () => {
        handleClick();
        setCurrentPrefixIndex(prefix);
        const updatedRemembered = new Set(rememberedPrefixes);
        updatedRemembered.add(prefix);
        setRememberedPrefixes(updatedRemembered);
        localStorage.setItem('rememberedPrefixes', JSON.stringify(Array.from(updatedRemembered)));
    };

    const handleForget = () => {
        const updatedRemembered = new Set(rememberedPrefixes);
        updatedRemembered.delete(prefix);
        setRememberedPrefixes(updatedRemembered);
        localStorage.setItem('rememberedPrefixes', JSON.stringify(Array.from(updatedRemembered)));
        handleClick();
    };

    // 切换显示所有前缀的状态
    const toggleShowAllPrefixes = () => {
        setShowAllPrefixes((prev) => !prev);
        // 通过切换时重置前缀索引，以确保前缀索引不会超出范围
        setPrefixIndex(0);
    };

    // 处理键盘事件
    const handleKeyDown = (event: KeyboardEvent) => {
        switch (event.key) {
            case 'ArrowLeft':
                changePrefix('prev');
                break;
            case 'ArrowRight':
                changePrefix('next');
                break;
            case 'ArrowUp':
            case 'ArrowDown':
                changePrefix(event.key === 'ArrowUp' ? 'prev' : 'next');
                break;
            case ' ':
            case 'Enter':
                handleClick();
                break;
            default:
                break;
        }
    };

    // 添加和清除事件监听器
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    // 计算当前前缀是否已记住
    const isRemembered = rememberedPrefixes.has(prefix);

    // 处理点击前缀的事件
    const handlePrefixClick = (clickedPrefix: string) => {
        const newIndex = currentPrefixList.indexOf(clickedPrefix);
        if (newIndex !== -1) {
            setPrefixIndex(newIndex);
            setPrefixInfo(null)
        }
    };

    return (
        <div className="word-container">
            <div className="header">
                <p>
                    {currentPrefixNumber} / {totalPrefixes}
                </p>
            </div>
            <div className="navigation">
                <button onClick={() => changePrefix('prev')}>&lt;</button>
                <div className="card" onClick={handleClick}>
                    <span className="card-word">{prefix}</span>
                </div>
                <button onClick={() => changePrefix('next')}>&gt;</button>
            </div>
            <div className="actions">
                <button className="button-recognized" onClick={handleRemember} disabled={isRemembered}>认识</button>
                <button className="button-unrecognized" onClick={handleForget}>不认识</button>
            </div>
            <div className={`prefix-info ${prefixInfo ? '' : 'hidden'}`}>
                {prefixInfo && (
                    <div>
                        <p>{prefixInfo.explanation}</p>
                        <ul>
                            {prefixInfo.examples.map((example, index) => (
                                <li key={index}>{example}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="prefix-list">
                <div className="flex-center-between">
                    <h3>{showAllPrefixes ? '所有前缀' : '未记住的前缀'}:</h3>
                    <Switch
                        checked={showAllPrefixes}
                        onChange={toggleShowAllPrefixes}
                        checkedChildren="all"
                        unCheckedChildren="未记住"
                    />
                </div>

                <ul>
                    {currentPrefixList.map((p, index) => (
                        <li
                            key={index}
                            className={rememberedPrefixes.has(p) ? 'remembered' : ''}
                            onClick={() => handlePrefixClick(p)}
                        >
                            {p}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Prefix;
