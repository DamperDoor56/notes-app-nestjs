const Check = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <g strokeWidth={1.5}>
      <circle cx={12} cy={12} r={10} opacity={0.5} />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.5 12.5 2 2 5-5"
      />
    </g>
  </svg>
)
export default Check
