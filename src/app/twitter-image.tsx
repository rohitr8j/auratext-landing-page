import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'AuraText - AI-Powered Text Assistant for Windows'
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #000000, #111111)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                    position: 'relative',
                }}
            >
                {/* Background Mesh Effect */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-20%',
                        width: '140%',
                        height: '140%',
                        background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), transparent 60%)',
                        zIndex: 1,
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2,
                        padding: '40px',
                        textAlign: 'center',
                    }}
                >
                    {/* Logo Placeholder or Icon */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        <svg
                            width="80"
                            height="80"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                    </div>

                    <div
                        style={{
                            fontSize: 64,
                            fontWeight: 800,
                            color: 'white',
                            marginBottom: 20,
                            letterSpacing: '-0.02em',
                            textShadow: '0 0 40px rgba(59, 130, 246, 0.5)',
                        }}
                    >
                        AuraText
                    </div>

                    <div
                        style={{
                            fontSize: 32,
                            color: '#94a3b8',
                            maxWidth: 800,
                            lineHeight: 1.4,
                            fontWeight: 400,
                        }}
                    >
                        Your AI writing copilot for Windows.
                    </div>

                    <div
                        style={{
                            fontSize: 24,
                            color: '#3b82f6',
                            marginTop: 30,
                            fontWeight: 600,
                            background: 'rgba(59, 130, 246, 0.1)',
                            padding: '10px 24px',
                            borderRadius: '50px',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                        }}
                    >
                        auratxt.com
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
