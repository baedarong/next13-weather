import HomeButton from "@/components/HomeButton";
import { getForecase } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export function generateMetadata({ searchParams }: Props) {
  return {
    title: `날씨 앱 - ${searchParams.name}`,
    description: `${searchParams.name} 날씨를 알려드립니다.`,
  };
}

export default async function Detail({ params, searchParams }: Props) {
  const res = await getForecase(params.location);
  return (
    <>
      <h1>{searchParams.name}의 3일 예보</h1>
      <ul>
        {res.forecast.forecastday.map((day, index) => (
          <li key={index}>
            날짜: {day.date} 온도: {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
