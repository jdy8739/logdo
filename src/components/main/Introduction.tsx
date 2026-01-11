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
        <p className={introDescription}>
          게임, 블록체인 금융 서비스를 거쳐 현재는 클라우드 플랫폼을 개발하고 있습니다.
        </p>
        <p className={introDescription}>
          AI를 잘 쓰는 개발자가 되되, 사람만이 줄 수 있는 가치를 놓치지 않으려 합니다.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
