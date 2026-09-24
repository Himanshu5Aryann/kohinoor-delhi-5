type SplashScreenProps = {
  isExiting: boolean;
};

export default function SplashScreen({ isExiting }: SplashScreenProps) {
  return (
    <div
      className={`splash-screen${isExiting ? " splash-screen--exiting" : ""}`}
      role="status"
      aria-label="Loading Kohinoor Home Solutions"
    >
      <div className="splash-screen__content">
        <img
          src="/logohere.png"
          alt="Kohinoor Home Solutions"
          className="splash-screen__logo"
        />
        <p className="splash-screen__name">KOHINOOR HOME SOLUTIONS</p>
        <p className="splash-screen__since">SINCE 2008</p>
        <div className="splash-screen__dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}