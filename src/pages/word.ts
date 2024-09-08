/**
 *  fileName:calc_json
 *  time:2024/8/30
 *  todo:$END$
 */
let str = `
1. **un-** （否定）
   - unhappy (adj.) 不快乐的
   - unfair (adj.) 不公平的
   - undo (v.) 撤销
   - unclear (adj.) 不清楚的

2. **re-** （再，重复）
   - rewrite (v.) 重写
   - return (v.) 归还
   - replay (v.) 重播
   - redo (v.) 重做

3. **in-** （否定）
   - inactive (adj.) 不活跃的
   - incorrect (adj.) 错误的
   - invisible (adj.) 看不见的
   - inefficient (adj.) 低效的

4. **dis-** （否定，分开）
   - disappear (v.) 消失
   - disagree (v.) 不同意
   - disconnect (v.) 断开
   - dislike (v.) 不喜欢

5. **pre-** （在…之前）
   - pretest (n.) 预测试
   - preview (v.) 预览
   - predict (v.) 预测
   - preheat (v.) 预热

6. **mis-** （错误）
   - misunderstand (v.) 误解
   - mislead (v.) 误导
   - misplace (v.) 放错地方
   - misuse (v.) 滥用

7. **non-** （无，不）
   - nonstop (adj.) 不间断的
   - nonprofit (adj.) 非营利的
   - nonhuman (adj.) 非人类的
   - nonviolent (adj.) 非暴力的

8. **sub-** （下，次等）
   - submarine (n.) 潜水艇
   - subway (n.) 地铁
   - subordinate (adj.) 从属的
   - submerge (v.) 淹没

9. **inter-** （在…之间）
   - international (adj.) 国际的
   - interact (v.) 互动
   - interfere (v.) 干涉
   - internet (n.) 互联网

10. **over-** （过度）
   - overeat (v.) 吃得过多
   - overwork (v.) 过度工作
   - overestimate (v.) 高估
   - overreact (v.) 反应过度

11. **under-** （不足，下）
   - underweight (adj.) 体重不足的
   - underestimate (v.) 低估
   - underpay (v.) 工资过低
   - underground (adj.) 地下的

12. **anti-** （反）
   - antisocial (adj.) 反社会的
   - antibiotic (n.) 抗生素
   - antidote (n.) 解毒剂
   - antifreeze (n.) 防冻剂

13. **de-** （减少，去除）
   - defrost (v.) 解冻
   - degrade (v.) 降级
   - deactivate (v.) 停用
   - detoxify (v.) 排毒

14. **ex-** （前，出去）
   - ex-president (n.) 前总统
   - export (v.) 出口
   - exclude (v.) 排除
   - exit (v.) 离开

15. **en-** （使…成为）
   - enable (v.) 使能够
   - enlarge (v.) 扩大
   - enrich (v.) 使丰富
   - enforce (v.) 执行

16. **pro-** （支持，向前）
   - promote (v.) 推广
   - proceed (v.) 继续
   - proactive (adj.) 积极主动的
   - protect (v.) 保护

17. **auto-** （自动）
   - automobile (n.) 汽车
   - automatic (adj.) 自动的
   - autograph (n.) 签名
   - autopilot (n.) 自动驾驶仪

18. **bi-** （两，双）
   - bicycle (n.) 自行车
   - bilingual (adj.) 双语的
   - biweekly (adj.) 每两周的
   - bisect (v.) 平分

19. **multi-** （多）
   - multilingual (adj.) 多语言的
   - multitask (v.) 多任务处理
   - multimillionaire (n.) 亿万富翁
   - multinational (adj.) 跨国的

20. **trans-** （横过，穿越）
   - transport (v.) 运输
   - translate (v.) 翻译
   - transplant (v.) 移植
   - transfer (v.) 转移

21. **post-** （在…之后）
   - postgraduate (n.) 研究生
   - postwar (adj.) 战后的
   - postpone (v.) 推迟
   - postscript (n.) 附言

22. **co-** （共同）
   - cooperate (v.) 合作
   - coauthor (n.) 合著者
   - coexist (v.) 共存
   - coworker (n.) 同事

23. **super-** （超级，超出）
   - superhero (n.) 超级英雄
   - supernatural (adj.) 超自然的
   - supermarket (n.) 超市
   - supervisor (n.) 主管

24. **hyper-** （过度，超）
   - hyperactive (adj.) 过度活跃的
   - hypertension (n.) 高血压
   - hyperlink (n.) 超链接
   - hypersensitive (adj.) 过敏的

25. **semi-** （半，部分）
   - semicircle (n.) 半圆
   - semiannual (adj.) 每半年一次的
   - semiconscious (adj.) 半清醒的
   - semifinal (n.) 半决赛

26. **tele-** （远程）
   - television (n.) 电视
   - telescope (n.) 望远镜
   - teleport (v.) 远距离传送
   - telegraph (n.) 电报

27. **mono-** （单一）
   - monotone (n.) 单调
   - monologue (n.) 独白
   - monolingual (adj.) 单语言的
   - monocle (n.) 单片眼镜

28. **fore-** （前，预先）
   - forecast (v.) 预报
   - forehead (n.) 前额
   - foresee (v.) 预见
   - forefront (n.) 最前线

29. **circum-** （环绕）
   - circumnavigate (v.) 环航
   - circumstance (n.) 情况
   - circumvent (v.) 规避
   - circumference (n.) 圆周

30. **contra-** （反对）
   - contradict (v.) 反驳
   - contravene (v.) 违反
   - contrast (v.) 对比
   - contraceptive (n.) 避孕药

31. **extra-** （额外的）
   - extraordinary (adj.) 非凡的
   - extracurricular (adj.) 课外的
   - extraterrestrial (adj.) 地球外的
   - extravert (n.) 外向的人

32. **macro-** （大，宏观）
   - macroeconomics (n.) 宏观经济学
   - macroscopic (adj.) 宏观的
   - macromolecule (n.) 大分子
   - macrostructure (n.) 宏观结构

33. **micro-** （小，微观）
   - microscope (n.) 显微镜
   - microbe (n.) 微生物
   - microchip (n.) 微芯片
   - microbiology (n.) 微生物学

34. **poly-** （多）
   - polygon (n.) 多边形
   - polyester (n.) 聚酯
   - polyglot (adj.) 多语言的
   - polynomial (n.) 多项式

35. **tri-** （三）
   - triangle (n.) 三角形
   - tripod (n.) 三脚架
   - tricycle (n.) 三轮车
   - trilateral (adj.) 三边的

36. **hemi-** （半）
   - hemisphere (n.) 半球
   - hemiplegia (n.) 半身不遂
   - hemistich (n.) 半行诗
   - hemicycle (n.) 半圆形

38. **para-** （旁边，辅助）
   - parallel (adj.) 平行的
   - parachute (n.) 降落伞
   - parasol (n.) 阳伞
   - paramedic (n.) 辅助的

39. **pseudo-** （假，伪）
   - pseudonym (n.) 笔名，假名
   - pseudoscience (n.) 伪科学
   - pseudopod (n.) 伪足
   - pseudoclassic (adj.) 伪古典的

40. **acro-** （高，顶点）
   - acrobat (n.) 杂技演员
   - acronym (n.) 缩写词
   - acrophobia (n.) 恐高症
   - acropolis (n.) 城堡

41. **hydro-** （水）
   - hydroelectric (adj.) 水力发电的
   - hydrogen (n.) 氢
   - hydrate (v.) 补充水分
   - hydropower (n.) 水力发电

42. **bio-** （生命，生物）
   - biology (n.) 生物学
   - biography (n.) 传记
   - biome (n.) 生物群系
   - biodegradable (adj.) 可生物降解的

43. **geo-** （地球，土地）
   - geology (n.) 地质学
   - geography (n.) 地理学
   - geothermal (adj.) 地热的
   - geocentric (adj.) 地心的

44. **chrono-** （时间）
   - chronology (n.) 年代学
   - chronicle (n.) 编年史
   - synchronize (v.) 同步
   - chronometer (n.) 精密计时器

45. **thermo-** （热）
   - thermometer (n.) 温度计
   - thermal (adj.) 热的
   - thermodynamics (n.) 热力学
   - thermostat (n.) 恒温器

46. **phono-** （声音）
   - phonograph (n.) 留声机
   - phonetic (adj.) 语音的
   - telephone (n.) 电话
   - microphone (n.) 麦克风

47. **photo-** （光）
   - photograph (n.) 照片
   - photocopy (n.) 复印件
   - photosynthesis (n.) 光合作用
   - photon (n.) 光子

48. **astro-** （星，宇宙）
   - astronaut (n.) 宇航员
   - astronomy (n.) 天文学
   - asteroid (n.) 小行星
   - astrophysics (n.) 天体物理学

49. **electro-** （电）
   - electronics (n.) 电子学
   - electrode (n.) 电极
   - electrocardiogram (n.) 心电图
   - electrolyte (n.) 电解质

51. **bene-** （好，益处）
   - benefit (n.) 益处
   - benevolent (adj.) 仁慈的
   - benign (adj.) 良性的
   - benefactor (n.) 慈善家

53. **epi-** （在…之上）
   - epicenter (n.) 震中
   - epidermis (n.) 表皮
   - epidemic (n.) 流行病
   - epitaph (n.) 墓志铭

54. **peri-** （周围）
   - perimeter (n.) 周长
   - periscope (n.) 潜望镜
   - peripheral (adj.) 外围的
   - periphery (n.) 边缘

55. **syn-** （共同）
   - synchronize (v.) 同步
   - synergy (n.) 协同作用
   - synthesis (n.) 合成
   - synonym (n.) 同义词

56. **ultra-** （极端，超越）
   - ultraviolet (adj.) 紫外线的
   - ultramodern (adj.) 超现代的
   - ultrasonic (adj.) 超声波的
   - ultralight (adj.) 极轻的

57. **infra-** （下，低于）
   - infrared (adj.) 红外线的
   - infrastructure (n.) 基础设施
   - infrahuman (adj.) 次人类的
   - infrasonic (adj.) 次声的

58. **meta-** （超越，改变）
   - metamorphosis (n.) 变形
   - metaphor (n.) 隐喻
   - metaphysics (n.) 形而上学
   - metadata (n.) 元数据

59. **pan-** （全，广泛）
   - panorama (n.) 全景
   - pandemic (n.) 大流行病
   - panacea (n.) 万能药
   - pan-American (adj.) 泛美的

60. **eu-** （好，优）
   - euphemism (n.) 委婉语
   - euphoria (n.) 狂喜
   - eulogy (n.) 颂词
   - euphonious (adj.) 悦耳的

61. **mal-** （坏，恶）
   - malfunction (n.) 故障
   - malnutrition (n.) 营养不良
   - malice (n.) 恶意
   - malpractice (n.) 渎职

62. **omni-** （全，遍）
   - omnipresent (adj.) 无处不在的
   - omnipotent (adj.) 全能的
   - omniscient (adj.) 无所不知的
   - omnivore (n.) 杂食动物

63. **aqua-** （水）
   - aquarium (n.) 水族馆
   - aquatic (adj.) 水生的
   - aqueduct (n.) 水道
   - aquifer (n.) 含水层

64. **ante-** （在…之前）
   - anterior (adj.) 前面的
   - antedate (v.) 提前日期
   - antechamber (n.) 前厅
   - antecedent (n.) 前情

65. **counter-** （反对，相反）
   - counteract (v.) 抵制
   - counterpart (n.) 对应的人或物
   - counterattack (n.) 反击
   - counterfeit (adj.) 假冒的

66. **vice-** （副，代理）
   - vice-president (n.) 副总统
   - viceroy (n.) 总督
   - vice-chairman (n.) 副主席
   - vice-chancellor (n.) 副校长

67. **uni-** （一，单一）
   - uniform (n.) 制服
   - unicycle (n.) 独轮车
   - unique (adj.) 独特的
   - unity (n.) 团结

68. **quad-** （四）
   - quadrilateral (n.) 四边形
   - quadruple (adj.) 四倍的
   - quadruped (n.) 四足动物
   - quadrant (n.) 象限

69. **penta-** （五）
   - pentagon (n.) 五边形
   - pentathlon (n.) 五项全能
   - pentameter (n.) 五音步诗
   - pentarchy (n.) 五人统治

70. **hexa-** （六）
   - hexagon (n.) 六边形
   - hexadecimal (adj.) 十六进制的
   - hexapod (n.) 六足动物
   - hexagram (n.) 六芒星

71. **sept-** （七）
   - septennial (adj.) 每七年的
   - septuplets (n.) 七胞胎
   - septangle (n.) 七角形
   - septuagint (n.) 七十士译本

72. **octo-** （八）
   - octopus (n.) 章鱼
   - octagon (n.) 八边形
   - octogenarian (n.) 八十多岁的人
   - octave (n.) 八度音阶

73. **novem-** （九）
   - November (n.) 十一月（旧历的九月）
   - novennial (adj.) 每九年的
   - novemdigitate (adj.) 九指的
   - novemdecillion (n.) 十的六十次方

74. **deca-** （十）
   - decade (n.) 十年
   - decagon (n.) 十边形
   - decathlon (n.) 十项全能
   - decapod (n.) 十足动物

75. **cent-** （百）
   - century (n.) 世纪
   - centennial (adj.) 百年纪念的
   - centipede (n.) 蜈蚣
   - centigrade (adj.) 摄氏的

76. **milli-** （千）
   - millimeter (n.) 毫米
   - millennium (n.) 一千年
   - millipede (n.) 千足虫
   - millisecond (n.) 毫秒

77. **kilo-** （千）
   - kilogram (n.) 千克
   - kilometer (n.) 公里
   - kilowatt (n.) 千瓦
   - kilobyte (n.) 千字节

78. **nano-** （十亿分之一，极小）
   - nanosecond (n.) 纳秒
   - nanotechnology (n.) 纳米技术
   - nanometer (n.) 纳米
   - nanoparticle (n.) 纳米粒子

80. **mega-** （大，百万）
   - megaphone (n.) 扩音器
   - megabyte (n.) 兆字节
   - megawatt (n.) 兆瓦
   - megastar (n.) 大明星

81. **giga-** （十亿）
   - gigabyte (n.) 千兆字节
   - gigahertz (n.) 吉赫兹
   - gigaflop (n.) 十亿次浮点运算
   - gigawatt (n.) 十亿瓦

83. **iso-** （等，同）
   - isometric (adj.) 等距的
   - isosceles (adj.) 等腰的
   - isobar (n.) 等压线
   - isotope (n.) 同位素

84. **hetero-** （异，不同）
   - heterogeneous (adj.) 异类的
   - heterosexual (adj.) 异性恋的
   - heterodoxy (n.) 异端
   - heteromorphic (adj.) 异形的

85. **homo-** （相同）
   - homogeneous (adj.) 同质的
   - homonym (n.) 同音异义词
   - homosexual (adj.) 同性恋的
   - homophone (n.) 同音字

87. **neo-** （新）
   - neonatal (adj.) 新生儿的
   - neoclassic (adj.) 新古典主义的
   - neologism (n.) 新词
   - neoliberal (adj.) 新自由主义的

90. **crypto-** （秘密，隐）
   - cryptography (n.) 密码学
   - cryptic (adj.) 隐秘的
   - cryptocurrency (n.) 加密货币
   - cryptogram (n.) 密码
`

let prefixes: string[] = str.match(/\*\*(.*?)\*\*/g)?.map(match => match.replace(/\*\*/g, '')) || [];
console.log(`prefixes ==> `, prefixes)
console.log(`prefixes.length ==> `, prefixes.length)

const duplicates = prefixes.reduce((acc, item, index, arr) => {
  // @ts-ignore
  if (arr.indexOf(item) !== index && !acc.includes(item)) {
    // @ts-ignore
    acc.push(item);
  }
  return acc;
}, []);

console.log(duplicates); // 输出：[1, 2, 3]
let set = new Set(prefixes);
let len = set.size;
console.log(`len ==> `, len)
interface PrefixInfo {
  prefix: string;
  explanation: string;
  examples: string[];
}
export const getPrefixInfo = (prefix: string): PrefixInfo | null => {
  // let reg = new RegExp(`\\* \\*\\*${prefix}\\*\\*：(.*?)\\n((?:  - .+(?:\\n|$))*)`, 's');
  const regex = new RegExp(`\\*\\*${prefix}\\*\\*(.*?)\\n((?:\\s*- .+(?:\\n|$))*)`, 's');
  // const regex = /\*\*pseudo-\*\*(.*?)\n(?:\s*-([\s\S])*\s*\n)/s;
  const match = str.match(regex);
  console.log(`match ==> `, match)

  // 如果匹配成功，返回解释和例子
  if (match) {
    const explanation = match[1].trim().replace(/[（）]/g, ''); // 前缀解释
    const examples = match[2]
        .trim()
        .split('\n')
        .map(example => example.trim()); // 例子数组
    return {
      prefix: prefix,
      explanation: explanation,
      examples: examples.slice(0, 4)
    };
  } else {
    return null; // 如果没有找到匹配项，返回 null
  }

};
export { prefixes }
