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
                const start = range[0] + i * 0.005;
                const end = start + 0.05;
                
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

    // 컨테이너는 총 400vh 높이를 가져 스크롤을 넉넉하게 할 수 있도록 합니다.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 섹션 1: 기존의 문제점 제기 (0.00 ~ 0.22)
    const op1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.22], [50, 0, 0, -50]);

    // 섹션 2: 문제의 심화 (0.25 ~ 0.47)
    const op2 = useTransform(scrollYProgress, [0.25, 0.30, 0.40, 0.47], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.30, 0.40, 0.47], [50, 0, 0, -50]);

    // 섹션 3: 솔루션 등장 (0.50 ~ 0.72)
    const op3 = useTransform(scrollYProgress, [0.50, 0.55, 0.65, 0.72], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.50, 0.55, 0.65, 0.72], [50, 0, 0, -50]);

    // 섹션 4: 솔루션 설명 및 클로즈업 (0.75 ~ 1.0)
    // 텍스트는 0.9부근에서 사라지기 시작합니다.
    const op4 = useTransform(scrollYProgress, [0.75, 0.80, 0.90, 0.95], [0, 1, 1, 0]);
    const y4 = useTransform(scrollYProgress, [0.75, 0.80, 0.90, 0.95], [50, 0, 0, -30]);

    // 의자(벤치) 애니메이션: 서서히 나타나며 마지막엔 클로즈업
    const benchY = useTransform(scrollYProgress, [0.75, 0.88, 1], [150, 0, 0]);
    const benchOp = useTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
    const benchScale = useTransform(scrollYProgress, [0.85, 0.98, 1], [1, 1.2, 1.2]);
    const benchBlur = useTransform(scrollYProgress, [0.75, 0.85], ["blur(15px)", "blur(0px)"]);

    // 비디오 배경 및 블랙 오버레이 (마지막엔 완전한 블랙에 가까운 딥 그레이)
    const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
    const videoOpacity = useTransform(scrollYProgress, [0.85, 0.95], [1, 0.05]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.7, 0.85, 0.95], [0.6, 0.8, 0.4, 0.96]);

    useEffect(() => {
        // 스크롤 프로그레스에 따라 비디오의 현재 재생 위치(currentTime) 업데이트
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (videoRef.current && Number.isFinite(videoRef.current.duration)) {
                // 부드러운 스크러빙을 위해 requestAnimationFrame 사용 권장, 여기서는 간단히 최신값 할당
                videoRef.current.currentTime = videoRef.current.duration * latest;
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    const handleVideoLoaded = () => {
        setIsVideoLoaded(true);
    };

    return (
        <div ref={containerRef} className="relative w-full bg-black h-[500vh]">
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
                    // 브라우저가 스크롤 시 자동 재생을 시도하지 못하도록 제한
                    />
                </motion.div>
                
                {/* 블랙 오버레이 필터 (0.95 이후엔 완전한 블랙 암전 구현) */}
                <motion.div
                    style={{ opacity: overlayOpacity }}
                    className="absolute inset-0 bg-black pointer-events-none z-[5]"
                />

                {/* 텍스트 컨테이너들 */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center">

                    {/* Scene 1 */}
                    <motion.div
                        style={{ opacity: op1, y: y1 }}
                        className="absolute text-center max-w-4xl"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                            뜨거운 <span className="text-[#ff453a] drop-shadow-[0_0_15px_rgba(255,69,58,0.4)]">폭염</span>과<br />
                            얼어붙는 <span className="text-[#0a84ff] drop-shadow-[0_0_15px_rgba(10,132,255,0.4)]">혹한</span>의 거리
                        </h2>
                        <PhraseReveal 
                            scrollYProgress={scrollYProgress}
                            range={[0.02, 0.14]}
                            text="기존의 야외 벤치는 날씨의 변화에 무방비했습니다. 너무 뜨겁거나 차가워서 아무도 머물지 않는 버려진 공간이 되곤 했습니다."
                        />
                    </motion.div>

                    {/* Scene 2 */}
                    <motion.div
                        style={{ opacity: op2, y: y2 }}
                        className="absolute text-center max-w-4xl"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                            <span className="text-[#32d74b] drop-shadow-[0_0_15px_rgba(50,215,75,0.3)]">에너지</span>의 낭비, <br />
                            관리의 어려움
                        </h2>
                        <PhraseReveal 
                            scrollYProgress={scrollYProgress}
                            range={[0.27, 0.39]}
                            text="냉방이나 난방 기구를 무작정 설치하는 것은 막대한 에너지를 낭비하며, 지속적인 유지보수 비용을 발생시킵니다."
                        />
                    </motion.div>

                    {/* Scene 3 */}
                    <motion.div
                        style={{ opacity: op3, y: y3 }}
                        className="absolute text-center max-w-5xl"
                    >
                        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-[#98989d] text-xs tracking-[0.4em] font-bold uppercase transition-colors hover:text-white">
                            The Next Evolution
                        </div>
                        <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
                            <span className="text-[#bf5af2] drop-shadow-[0_0_20px_rgba(191,90,242,0.4)]">스스로 생각하는</span><br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600">스마트 휴식 공간</span>
                        </h2>
                        <div className="mb-10 text-2xl md:text-3xl font-bold bg-clip-text bg-gradient-to-r from-[#0a84ff] to-[#4c9aff] text-transparent drop-shadow-lg">
                            WETECH 스마트 벤치
                        </div>
                        <PhraseReveal 
                            scrollYProgress={scrollYProgress}
                            range={[0.52, 0.64]}
                            text="주요 환경 데이터를 감지하고, 스스로 필요한 온도를 계산합니다. 사람이 없을 때는 에너지를 아끼고, 사람이 오면 최적의 휴식을 제공합니다."
                        />
                    </motion.div>

                    {/* Scene 4 */}
                    <motion.div
                        style={{ opacity: op4, y: y4 }}
                        className="absolute inset-0 w-full h-[100vh] flex flex-col items-center justify-start pt-[12vh] md:pt-[18vh] px-4 max-w-[120rem] mx-auto z-20 text-center"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-bold text-white mb-8 md:mb-12 tracking-tight drop-shadow-xl z-30">
                            새로운 기준을 제시합니다
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full max-w-5xl mx-auto z-30">
                            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl flex flex-col items-center transition-all duration-300 hover:bg-white/20">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-white transition-all duration-500 group-hover:bg-[#3b82f6]">
                                    <span className="material-symbols-outlined text-[28px] md:text-[36px]">thermostat</span>
                                </div>
                                <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3 transition-colors">직류 세라믹 열전소자</h3>
                                <p className="text-white/70 text-xs md:text-sm break-keep">단일 모듈로 가열과 냉각을 동시에 수행하는 독자적인 특허 기술</p>
                            </div>
                            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl flex flex-col items-center transition-all duration-300 hover:bg-white/20">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-white transition-all duration-500 group-hover:bg-[#3b82f6]">
                                    <span className="material-symbols-outlined text-[28px] md:text-[36px]">energy_savings_leaf</span>
                                </div>
                                <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3 transition-colors">스마트 에너지 절감</h3>
                                <p className="text-white/70 text-xs md:text-sm break-keep">센서를 통해 이용자를 감지하고 최적의 대기/작동 전력 분배</p>
                            </div>
                            <div className="group bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl flex flex-col items-center transition-all duration-300 hover:bg-white/20">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 md:mb-6 text-white transition-all duration-500 group-hover:bg-[#3b82f6]">
                                    <span className="material-symbols-outlined text-[28px] md:text-[36px]">shield_lock</span>
                                </div>
                                <h3 className="text-white text-lg md:text-xl font-bold mb-2 md:mb-3 transition-colors">강력한 내구성</h3>
                                <p className="text-white/70 text-xs md:text-sm break-keep">비바람과 외부 충격에 견디는 IP방수방진 및 견고한 특수 마감</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                
                {/* Hero Bench Ascending and Zooming (Moved outside text container for persistent visibility) */}
                <motion.div 
                    style={{ 
                        y: benchY, 
                        opacity: benchOp, 
                        filter: benchBlur,
                        scale: benchScale 
                    }}
                    className="absolute bottom-0 left-0 w-full flex flex-col items-center justify-end pb-[5vh] z-10 translate-y-[20%] md:translate-y-[10%] pointer-events-none"
                >
                    <div className="relative">
                        <img 
                            src={heroBench} 
                            alt="WETECH Smart Bench Focus" 
                            className="w-full max-w-[1400px] h-auto object-contain drop-shadow-[0_20px_80px_rgba(0,0,0,0.9)] opacity-95 relative z-20"
                        />
                        {/* Floor Reflection for Depth */}
                        <motion.div 
                            style={{ opacity: useTransform(scrollYProgress, [0.85, 0.95], [0, 0.3]) }}
                            className="absolute top-[80%] left-0 w-full h-[40%] bg-gradient-to-b from-white/10 to-transparent blur-xl skew-x-[-10deg] scale-y-[-0.5] z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
