import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroBench from "../../assets/smart-bench/bench4.png";

const PLAYHOLDER_VIDEO = "https://cdn.pixabay.com/video/2020/05/13/38992-421731674_large.mp4"; // Nature/Park like video

export function ScrollStorytelling() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    // 컨테이너는 총 400vh 높이를 가져 스크롤을 넉넉하게 할 수 있도록 합니다.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 섹션 1: 기존의 문제점 제기
    const op1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [50, 0, 0, -50]);

    // 섹션 2: 문제의 심화
    const op2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [50, 0, 0, -50]);

    // 섹션 3: 솔루션 등장
    const op3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [50, 0, 0, -50]);

    // 섹션 4: 솔루션 설명
    const op4 = useTransform(scrollYProgress, [0.80, 0.85, 0.99, 1], [0, 1, 1, 0.9]);
    const y4 = useTransform(scrollYProgress, [0.80, 0.85, 1], [50, 0, 0]);
    const benchY = useTransform(scrollYProgress, [0.80, 0.92, 1], [150, 0, 0]);
    const benchBlur = useTransform(scrollYProgress, [0.80, 0.88, 1], ["blur(15px)", "blur(0px)", "blur(0px)"]);
    const benchOp = useTransform(scrollYProgress, [0.80, 0.88, 1], [0, 1, 1]);

    // 비디오 화면 확대 효과 (마지막에 몰입감 증대)
    const videoScale = useTransform(scrollYProgress, [0.7, 1], [1, 1.15]);
    const overlayOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0.6, 0.7, 0.8, 0.4]);

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
                    style={{ scale: videoScale }}
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
                    {/* 어두운 오버레이 필터 */}
                    <motion.div
                        style={{ opacity: overlayOpacity }}
                        className="absolute inset-0 bg-black pointer-events-none"
                    />
                </motion.div>

                {/* 텍스트 컨테이너들 */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center">

                    {/* Scene 1 */}
                    <motion.div
                        style={{ opacity: op1, y: y1 }}
                        className="absolute text-center max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            뜨거운 폭염과<br />얼어붙는 혹한의 거리
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 font-light break-keep">
                            기존의 야외 벤치는 날씨의 변화에 무방비했습니다.<br className="hidden md:block" />
                            너무 뜨겁거나 차가워서 아무도 머물지 않는 버려진 공간이 되곤 했습니다.
                        </p>
                    </motion.div>

                    {/* Scene 2 */}
                    <motion.div
                        style={{ opacity: op2, y: y2 }}
                        className="absolute text-center max-w-3xl"
                    >
                        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            에너지의 낭비, <br />관리의 어려움
                        </h2>
                        <p className="text-xl md:text-2xl text-white/80 font-light break-keep">
                            냉방이나 난방 기구를 무작정 설치하는 것은 막대한 에너지를 낭비하며,<br className="hidden md:block" />
                            지속적인 유지보수 비용을 발생시킵니다.
                        </p>
                    </motion.div>

                    {/* Scene 3 */}
                    <motion.div
                        style={{ opacity: op3, y: y3 }}
                        className="absolute text-center max-w-4xl"
                    >
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white/90 text-sm tracking-widest font-semibold uppercase">
                            The Next Evolution
                        </div>
                        <h2 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                            스스로 생각하는 휴식 공간,<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0052cc] to-[#4c9aff]">WETECH 스마트 벤치</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 font-light break-keep">
                            주요 환경 데이터를 감지하고, 스스로 필요한 온도를 계산합니다.<br className="hidden md:block" />
                            사람이 없을 때는 에너지를 아끼고, 사람이 오면 최적의 휴식을 제공합니다.
                        </p>
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
                        
                        {/* Hero Bench Ascending from Void */}
                        <motion.div 
                            style={{ y: benchY, opacity: benchOp, filter: benchBlur }}
                            className="absolute bottom-0 w-full flex justify-center z-10 translate-y-[20%] md:translate-y-[10%]"
                        >
                            <img 
                                src={heroBench} 
                                alt="WETECH Smart Bench Focus" 
                                className="w-full max-w-[1400px] h-auto object-contain mix-blend-screen drop-shadow-2xl opacity-90"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}
