import styles from "./style.module.css";
import Link from "next/link";
import { getCurrentWeater } from "@/utils/getCurrentWeather";
import { getTime } from "@/utils/getTime";
import RevalidateButton from "@/components/RevalidateButton";

export default async function Home() {
  const res = await getCurrentWeater("seoul");
  const time = await getTime(res.location.tz_id);

  return (
    <main className={styles.main}>
      <h1>뭉게뭉게</h1>
      <h3>{time.dateTime}</h3>

      <RevalidateButton tag={"time"} />
      <div>
        <ul className={styles.list}>
          <li>
            <Link href="/Seoul?name=서울">서울</Link>
            <span> {res.current.condition.text}</span>
          </li>
          <li>
            <Link href="/NY?name=뉴욕">뉴욕</Link>
          </li>
          <li>
            <Link href="/London?name=런던">런던</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
