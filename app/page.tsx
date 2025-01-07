import Image from "next/image";
import Link from "next/link";
import Me from '../public/images/pro1.jpg'

export default function Home() {
  return (
    <div className="home-container">
    <div className="intro-section fade-in">
      <h2 className="intro-title">I am a Professional</h2>
      <h1 className="intro-subtitle">Web Developer</h1>
      <p className="intro-text">
        Hey, I am <span className="intro-name">Muhammad Usman</span> from Karachi, Pakistan. I am a modern web developer with a couple of years of experience in the IT field, and I have a strong interest in AI (Artificial Intelligence).
      </p>
      <button className="hire-button">
        <Link href="/contact">Hire Me</Link>
      </button>
    </div>

    <div className="image-section fade-in fade-in-delay">
      <div className="image-wrapper">
        <Image className="profile-image" src={Me} alt="Muhammad Usman" />
      </div>
    </div>
  </div>
  );
}
