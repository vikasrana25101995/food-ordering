import Link from "next/link";
import { default as Style } from "./style/index.module.scss";

export default function Header() {
  return (
    <div className={Style.header}>
      <div className={Style.headerLeftSide}>Logo</div>
      <div className={Style.headerRightSide}>
        <div className={Style.headerItemContainer}>
          <Link href={""} className={Style.headerItem}>
            <div>Icon</div>
            <span>Search</span>
          </Link>
        </div>
        <div className={Style.headerItemContainer}>
          <Link href={""} className={Style.headerItem}>
            <div>Icon</div>
            <span>Offers</span>
          </Link>
        </div>
        <div className={Style.headerItemContainer}>
          <Link href={""} className={Style.headerItem}>
            <div>Icon</div>
            <span>Help</span>
          </Link>
        </div>
        <div className={Style.headerItemContainer}>
          <Link href={""} className={Style.headerItem}>
            <div>Icon</div>
            <span>Sign In</span>
          </Link>
        </div>
        <div className={Style.headerItemContainer}>
          <Link href={""} className={Style.headerItem}>
            <div>Icon</div>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
