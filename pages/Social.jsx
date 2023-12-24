import { Facebook } from "lucide-react";
import Link from "next/link";

const Social = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href="https://www.facebook.com">
          {" "}
          {/* 在這裡設定正確的 Facebook 頁面 URL */}
          <a>
            <Facebook />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default Social;
