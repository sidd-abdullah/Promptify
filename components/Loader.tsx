const Loader = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    className="animate-spin w-8 h-8 mx-auto items-center justify-center text-center"
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#333"
      strokeWidth="10"
      r="35"
      strokeDasharray="164.93361431346415 56.97787143782138"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        repeatCount="indefinite"
        dur="1s"
        values="0 50 50;360 50 50"
        keyTimes="0;1"
      ></animateTransform>
    </circle>
  </svg>
  )
}

export default Loader
