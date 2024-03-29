import { motion } from "framer-motion";

export default function Logo({ dark }) {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: dark ? "rgba(34, 34, 34, 0)" : "rgba(255, 255, 255, 0)",
    },
    visible: {
      pathLength: 1,
      fill: dark ? "rgba(34, 34, 34, 1)" : "rgba(255, 255, 255, 1)",
    },
  };
  const fill = dark ? "rgb(34, 34, 34)" : "rgb(255, 255, 255)";

  return (
    <svg
      width={dark ? "200" : "80"}
      height={dark ? "100" : "40"}
      viewBox="0 0 285.7 70.7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="svgGroup"
        strokeLinecap="round"
        fillRule="evenodd"
        fontSize="9pt"
        fill={fill}
        style={{ fill: fill }}
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          fill={fill}
          transition={{
            duration: 1.5,
            repeat: dark && Infinity,
            repeatType: "loop",
          }}
          d="M 85.7 57.4 L 126.4 57.4 L 135.1 42 L 104.4 42 L 104.4 37.2 L 127.4 37.2 L 136.1 21.7 L 104.4 21.7 L 104.4 15.4 L 132 15.4 L 140.7 0 L 85.6 0 L 77 15.4 L 85.7 15.4 L 85.7 57.4 Z M 284.7 70.7 L 285.7 70.7 L 254.4 31.4 L 279.4 0 L 256.1 0 L 245.8 13.2 L 235.6 0 L 212.2 0 L 233.8 28.1 L 211.5 57.4 L 212.3 57.4 A 0.877 0.877 0 0 0 212.426 57.384 Q 212.856 57.308 214.543 56.877 A 193.008 193.008 0 0 0 214.65 56.85 A 226.986 226.986 0 0 0 216.396 56.395 Q 217.179 56.188 218.055 55.952 A 466.983 466.983 0 0 0 219.9 55.45 Q 223 54.6 226.55 53.6 Q 230.1 52.6 233.1 51.75 A 1504.799 1504.799 0 0 0 234.531 51.344 Q 236.288 50.844 237.587 50.469 A 483.954 483.954 0 0 0 238 50.35 A 231.864 231.864 0 0 0 238.423 50.227 Q 239.867 49.806 239.802 49.8 A 0.024 0.024 0 0 0 239.8 49.8 L 245.6 42.5 L 284.7 70.7 Z M 165.8 57.4 L 142.7 0 L 163.9 0 L 176 30 L 188.4 0 L 209.6 0 L 181.9 63.8 Q 177.1 62.6 173.2 61.15 Q 169.3 59.7 165.8 57.4 Z M 8.5 15.4 L 0 15.4 L 8.5 0 L 57.2 0 A 1.147 1.147 0 0 1 57.708 0.145 Q 58.414 0.503 59.497 1.749 A 21.963 21.963 0 0 1 60 2.35 A 25.324 25.324 0 0 1 61.14 3.889 Q 62.325 5.608 63.782 8.16 A 111.606 111.606 0 0 1 64.7 9.8 A 103.39 103.39 0 0 1 66.803 13.86 Q 67.78 15.844 68.83 18.142 A 236.377 236.377 0 0 1 71 23.05 A 222.888 222.888 0 0 1 73.695 29.634 Q 76 35.513 78.5 42.7 A 12.364 12.364 0 0 1 78.187 43.331 Q 77.625 44.4 76.5 46.2 A 87.583 87.583 0 0 1 74.081 49.856 A 99.414 99.414 0 0 1 73.2 51.1 A 42.776 42.776 0 0 1 71.159 53.723 A 34.147 34.147 0 0 1 69.55 55.5 Q 67.7 57.4 66.5 57.4 L 8.5 57.4 L 8.5 15.4 Z M 55 41.6 L 46.2 19.7 A 2.97 2.97 0 0 0 46.142 19.591 Q 46.043 19.412 45.836 19.073 A 48.406 48.406 0 0 0 45.7 18.85 Q 45.3 18.2 44.85 17.5 Q 44.4 16.8 44 16.25 A 8.831 8.831 0 0 0 43.866 16.07 Q 43.614 15.742 43.521 15.705 A 0.058 0.058 0 0 0 43.5 15.7 L 27.4 15.7 L 27.4 41.9 L 54.9 41.9 Q 54.989 41.9 54.999 41.663 A 1.514 1.514 0 0 0 55 41.6 Z"
          vectorEffect="non-scaling-stroke"
        />
      </g>
    </svg>
  );
}
