const BurgerMenu = (props: any) => (
  <svg viewBox="0 0 100 80" {...props}>
    <rect width={80} height={12} rx={8} />
    <rect width={80} height={12} y={30} rx={8} />
    <rect width={80} height={12} y={60} rx={8} />
  </svg>
)
export default BurgerMenu
