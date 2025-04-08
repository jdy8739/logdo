import { StaticImage } from 'gatsby-plugin-image';
import {
  introContent,
  introDescription,
  introSection,
  introTitle,
  profileImageWrapper,
} from './Introduction.css';

const Introduction = () => {
  return (
    <section className={introSection}>
      <div className={profileImageWrapper}>
        <StaticImage
          src="../../images/profile.jpeg"
          alt="profile"
          width={250}
          height={250}
        />
      </div>
      <div className={introContent}>
        <h2 className={introTitle}>정도영 Web FE developer</h2>
        <p className={introDescription}>웹 개발자 정도영입니다.</p>
        <p className={introDescription}>
          블록체인 금융 도메인에서 프론트엔드 개발자로 일하고 있습니다.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
