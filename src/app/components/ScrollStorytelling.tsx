import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroBench from "../../assets/smart-bench/bench4.png";

const PLAYHOLDER_VIDEO = "https://cdn.pixabay.com/video/2020/05/13/38992-421731674_large.mp4"; // Nature/Park like video

function PhraseReveal({ text, scrollYProgress, range }: { text: string; scrollYProgress: any; range: [number, number] }) {
    const words = text.split(" ");
    return (
        <div className="flex flex-wrap justify-center gap-x-[0.35em] gap-y-1 max-w-3xl mx-auto">
            {words.map((word, i) => {
                // 각 단어별로 미세한 딜레이(스크롤 시점 차이)를 줍니다.
                const start = range[0] + i * 0.004;
                const end = start + 0.06;
                
                // 해당 범위에서 opacity와 blur를 변화시킵니다.
                const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                const blur = useTransform(scrollYProgress, [start, end], ["blur(12px)", "blur(0px)"]);
                const y = useTransform(scrollYProgress, [start, end], [15, 0]);
                
                return (
                    <motion.span
                        key={i}
                        style={{ opacity, filter: blur, y }}
                        className="inline-block text-lg md:text-2xl font-light tracking-wide break-keep text-[#f5f5f7]"
                    >
                        {word}
                    </motion.span>
                );
            })}
        </div>
    );
}

export function ScrollStorytelling() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // 컨테이너는 총 1200vh 높이를 가져 스크롤을 매우 여유 있게 하며, 모든 텍스트가 뚜렷해진 후 전환되도록 합니다.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 섹션 1: 기존의 문제점 제기 (0.00 ~ 0.28)
    const op1 = useTransform(scrollYProgress, [0, 0.05, 0.24, 0.30], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.05, 0.24, 0.30], [60, 0, 0, -60]);

    // 섹션 2: 문제의 심화 (0.32 ~ 0.58)
    const op2 = useTransform(scrollYProgress, [0.32, 0.37, 0.54, 0.60], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.32, 0.37, 0.54, 0.60], [60, 0, 0, -60]);

    // 섹션 3: 솔루션 등장 (0.62 ~ 0.88)
    const op3 = useTransform(scrollYProgress, [0.62, 0.67, 0.84, 0.90], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.62, 0.67, 0.84, 0.90], [60, 0, 0, -60]);

    // 섹션 4: 솔루션 설명 및 클로즈업
    const op4 = useTransform(scrollYProgress, [0.92, 0.94, 0.98, 1.0], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.92, 0.94, 0.98, 1.0], [40, 0, 0, -20]);

    // 의자(벤치) 애니메이션 - 텍스트를 가리지 않도록 조금 더 늦게, 그리고 덜 올라오게 조절합니다.
    const benchY = useTransform(scrollYProgress, [0.90, 0.96, 1], [400, 120, 0]);
    const benchOp = useTransform(scrollYProgress, [0.90, 0.93, 1], [0, 1, 1]);
    const benchScale = useTransform(scrollYProgress, [0.93, 0.98, 1], [1, 1.15, 1.2]);
    const benchBlur = useTransform(scrollYProgress, [0.90, 0.94], ["blur(20px)", "blur(0px)"]);

    // 비디오 배경
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
    const videoOpacity = useTransform(scrollYProgress, [0.90, 0.98], [1, 0.02]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.6, 0.90, 0.98], [0.5, 0.85, 0.3, 0.98]);

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
                videoRef.current.currentTime = videoRef.current.duration * latest;
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div ref={containerRef} className="relative w-full bg-black h-[1200vh]">
            <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center">

                {/* 스크롤 연동 비디오 배경 */}
                <motion.div
                    style={{ scale: videoScale, opacity: videoOpacity }}
                    className="absolute inset-0 w-full h-full"
                >
                    <video
                        ref={videoRef}
                        src={PLAYHOLDER_VIDEO}
                        className="w-full h-full object-cover"
                        preload="auto"
                        muted
                        playsInline
                        onLoadedMetadata={handleVideoLoaded}
                    />
                </motion.div>
                
                {/* 블랙 오버레이 필터 */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-black pointer-events-none z-[5]"
                />

                {/* 텍스트 컨테이너들 - 벤치보다 앞에 오도록 z-index를 높입니다. */}
                <div className="relative z-30 w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center">

                    {/* Scene 1: The Crisis */}
                    <motion.div
                        style={{ opacity: op1, y: y1 }}
                        className="absolute text-center max-w-5xl"
                    >
                        <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[1.05]">
                            도시가 <span className="text-[#ff453a] drop-shadow-[0_0_25px_rgba(255,69,58,0.5)]">침묵</span>할 때, <br />
                            우리는 <span className="text-[#0a84ff] drop-shadow-[0_0_25px_rgba(10,132,255,0.5)]">질문</span>했습니다
                        </h2>
                        <PhraseReveal 
                            scrollYProgress={scrollYProgress}
                            range={[0.04, 0.18]}
                            text="영하 20도의 혹한과 40도의 폭염 속에서, 기존의 야외 벤치는 그저 방치된 금속과 목재에 불과했습니다. 사람이 떠나버린 거리, 그 적막 속에 던지는 기술의 도전장입니다."
                        />
                    </motion.div>

                    {/* Scene 2: The Primitive Limitation */}
                    <motion.div
                        style={{ opacity: op2, y: y2 }}
                        className="absolute text-center max-w-5xl"
                    >
                        <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tight leading-[1.05]">
                            <span className="text-[#32d74b] drop-shadow-[0_0_20px_rgba(50,215,75,0.4)]">원시적인</span> 방식은 <br />
                            이제 끝났습니다
                        </h2>
                        <PhraseReveal 
                            scrollYProgress={scrollYProgress}
                            range={[0.36, 0.50]}
                            text="지속 가능하지 않은 기술은 진정한 기술이 아닙니다. 환경을 소모하며 얻는 안락함이 아닌, 한 방울의 에너지까지 지능적으로 제어하는 압도적인 효율의 시대를 엽니다."
                        />
                    </motion.div>

                    {/* Scene 3: The Revolution */}
                    <motion.div
                        style={{ opacity: op3, y: y3 }}
                        className="absolute text-center max-w-6xl"
                    >
                        <div className="inline-block mb-8 px-6 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-xl text-white text-xs tracking-[0.5em] font-black uppercase transition-all hover:bg-white/20">
                            The Paradigm Shift
                        </div>
                        <h2 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[1.1]">
                            <span className="text-[#bf5af2] drop-shadow-[0_0_30px_rgba(191,90,242,0.5)] whitespace-nowrap">스스로 생각하는</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">지능형 휴식 공간</span>
                        </h2>
                        <div className="mb-12 text-3xl md:text-4xl font-black bg-clip-text bg-gradient-to-r from-[#0a84ff] to-[#4c9aff] text-transparent drop-shadow-2xl">
                            WETECH SMART BENCH
                        </div>
                        <PhraseReveal 
                            scrollYProgress={scrollYProgress}
                            range={[0.66, 0.78]}
                            text="가구의 개념을 넘어선 엔지니어링의 결정체. 실시간 환경 데이터를 분석하여 스스로 필요한 온도를 계산하고, 마침내 인류가 꿈꿔온 완벽한 평온을 설계합니다."
                        />
                    </motion.div>

                    {/* Scene 4: Engineering Miracles */}
                    <motion.div
                        style={{ opacity: op4, y: y4 }}
                        className="absolute inset-0 w-full h-[100vh] flex flex-col items-center justify-start pt-[5vh] md:pt-[10vh] px-4 max-w-[120rem] mx-auto z-20 text-center"
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-white mb-10 md:mb-16 tracking-tight drop-shadow-2xl z-30">
                            불가능을 가능케 하는 <br className="md:hidden" /><span className="text-[#0071e3]">엔지니어링의 정수</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full max-w-[100rem] mx-auto z-30">
                            <div className="group bg-white/15 backdrop-blur-2xl border border-white/30 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center transition-all duration-500 hover:bg-white/25 hover:border-white/50 hover:-translate-y-2">
                                <h3 className="text-white text-xl md:text-2xl font-black mb-4 transition-colors">마스터리 열전 제어</h3>
                                <p className="text-white/80 text-sm md:text-base leading-relaxed break-keep font-medium">냉매를 사용하지 않는 친환경 무냉매 방식의 단일 모듈로 가열과 냉각을 동시에 구현</p>
                            </div>
                            <div className="group bg-white/15 backdrop-blur-2xl border border-white/30 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center transition-all duration-500 hover:bg-white/25 hover:border-white/50 hover:-translate-y-2">
                                <h3 className="text-white text-xl md:text-2xl font-black mb-4 transition-colors">지능형 제어 아키텍처</h3>
                                <p className="text-white/80 text-sm md:text-base leading-relaxed break-keep font-medium">이용자의 존재를 감지하고 스스로 생각하는 메인 브레인 기반의 초절전 전력 관리</p>
                            </div>
                            <div className="group bg-white/15 backdrop-blur-2xl border border-white/30 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center transition-all duration-500 hover:bg-white/25 hover:border-white/50 hover:-translate-y-2">
                                <h3 className="text-white text-xl md:text-2xl font-black mb-4 transition-colors">압도적인 생존력</h3>
                                <p className="text-white/80 text-sm md:text-base leading-relaxed break-keep font-medium">어떤 극한의 기상 상황 앞에서도 굴복하지 않는 IP등급의 완벽한 방어 기작과 견고함</p>
                            </div>
                            <div className="group bg-white/15 backdrop-blur-2xl border border-white/30 p-8 md:p-10 rounded-[2.5rem] flex flex-col items-center transition-all duration-500 hover:bg-white/25 hover:border-white/50 hover:-translate-y-2">
                                <h3 className="text-white text-xl md:text-2xl font-black mb-4 transition-colors">전천후 커스텀</h3>
                                <p className="text-white/80 text-sm md:text-base leading-relaxed break-keep font-medium">당신이 무엇을 상상하든 현실로 만듭니다. 모든 환경과 조건에 대응하는 무한한 맞춤형 솔루션</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Hero Bench Ascending and Zooming */}
                <motion.div 
                    style={{ 
                        y: benchY, 
                        opacity: benchOp, 
                        filter: benchBlur,
                        scale: benchScale 
                    }}
                    className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end pb-[5vh] z-10 translate-y-[15%] md:translate-y-[8%] pointer-events-none"
                >
                    <div className="relative">
                        <img 
                            src={heroBench} 
                            alt="WETECH Smart Bench Focus" 
                            className="w-full max-w-[1500px] h-auto object-contain drop-shadow-[0_30px_100px_rgba(0,0,0,0.95)] opacity-95 relative z-20"
                        />
                        {/* Floor Reflection for Depth */}
                        <motion.div 
                            style={{ opacity: useTransform(scrollYProgress, [0.93, 0.98], [0, 0.4]) }}
                            className="absolute top-[85%] left-[-10%] w-[120%] h-[50%] bg-gradient-to-b from-white/15 to-transparent blur-2xl skew-x-[-15deg] scale-y-[-0.6] z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
