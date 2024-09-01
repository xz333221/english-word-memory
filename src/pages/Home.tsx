import React, {useState} from 'react';
import {prefixes, getPrefixInfo} from './word';
import './index.css';

interface PrefixInfo {
    prefix: any;
    explanation: string;
    examples: string[];
}

const Home: React.FC = () => {
    const [prefixIndex, setPrefixIndex] = useState(0); // 用于存储当前前缀的索引
    const [prefixInfo, setPrefixInfo] = useState<PrefixInfo | null>(null);

    const prefix = prefixes[prefixIndex]; // 获取当前索引的前缀

    const handleClick = () => {
        const info = getPrefixInfo(prefix);
        setPrefixInfo(info); // 将结果保存到状态变量中
    };

    const handlePrevious = () => {
        // 左箭头点击处理
        setPrefixIndex((prevIndex) => {
            const newIndex = prevIndex > 0 ? prevIndex - 1 : prefixes.length - 1;
            setPrefixInfo(null); // 清空 prefixInfo
            return newIndex;
        });
    };

    const handleNext = () => {
        // 右箭头点击处理
        setPrefixIndex((prevIndex) => {
            const newIndex = prevIndex < prefixes.length - 1 ? prevIndex + 1 : 0;
            setPrefixInfo(null); // 清空 prefixInfo
            return newIndex;
        });
    };

    return (
        <div className="word-container">
            <div className="navigation">
                <button onClick={handlePrevious}>&lt; {/* 左箭头 */}</button>
                <div className="card" onClick={handleClick}>
                    <span className="card-word">{prefix}</span>
                </div>
                <button onClick={handleNext}>&gt; {/* 右箭头 */}</button>
            </div>
            {/* 显示获取到的前缀信息 */}
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
        </div>
    );
};

export default Home;
