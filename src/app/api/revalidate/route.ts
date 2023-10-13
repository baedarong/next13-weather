import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/*
온디맨드 재검증(On-demand revalidtaion)
수동으로 재검증할 수 있습니다. 온디맨드 재검증은 태그(tag) 혹은 경로(path)를 기반으로 특정 데이터 그룹을 일괄 재검증할 수 있습니다. 이때 재검증된 캐시 데이터는 삭제됩니다. 즉각적으로 최신 데이터를 확보해야 하는 경우에 유용합니다.
// 데이터에 태그를 달아둡니다.
fetch('https://...', { next: { tags: ['collection'] } })

// 태그된 데이터를 재검증합니다.
revalidateTag('collection')

// 캐시를 지울 뿐 새로운 상태로 업데이트 하진 않으므로 페이지 새로고침이 필요합니다.
*/

export async function POST(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get("tag");
  if (!tag) throw new Error("태그는 필수입니다.");

  revalidateTag(tag);
  return NextResponse.json({ message: "재검증에 성공했습니다.", tag });
}
