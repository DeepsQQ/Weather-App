import styles from "./searchButton.module.scss";

const Index = ({ setActive }) => {
  const onClick = () => (active) => {
    setActive(active);
  };

  return (
    <svg
      className={styles.icon}
      onClick={onClick(true)}
      xmlns="http://www.w3.org/2000/svg"
      width="165"
      height="165"
      viewBox="0 0 165 165"
      fill="none"
    >
      <g clipPath="url(#clip0_8_29)">
        <path d="M165 0H0V165H165V0Z" stroke="black" strokeWidth="0.00064" />
        <path
          d="M161.989 140.116L124.09 102.218C130.412 91.9875 134.063 79.9322 134.063 67.0313C134.063 30.0094 104.053 0 67.0313 0C30.0094 0 0 30.0094 0 67.0313C0 104.053 30.0094 134.063 67.0313 134.063C79.9322 134.063 91.9875 130.412 102.218 124.09L140.116 161.989C144.128 166 150.686 166 154.698 161.989L161.989 154.698C166 150.686 166 144.128 161.989 140.116ZM34.2169 99.8456C25.4513 91.08 20.625 79.4269 20.625 67.0313C20.625 54.6356 25.4513 42.9825 34.2169 34.2169C42.9825 25.4513 54.6356 20.625 67.0313 20.625C79.4269 20.625 91.08 25.4513 99.8456 34.2169C108.611 42.9825 113.438 54.6356 113.438 67.0313C113.438 79.4269 108.611 91.08 99.8456 99.8456C91.08 108.611 79.4269 113.438 67.0313 113.438C54.6356 113.438 42.9825 108.611 34.2169 99.8456Z"
          fill="black"
          stroke="black"
          strokeWidth="0.00064"
        />
      </g>
      <defs>
        <clipPath id="clip0_8_29">
          <rect width="165" height="165" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Index;
