import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memoで囲むことでpropsの値に変更がない限り、childrenAreaは更新されない
export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildrenAreaが再レンダリング");
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
