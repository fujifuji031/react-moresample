import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

//memoで囲むことでpropsの値に変更がない限り、childrenAreaは更新されない
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildrenAreaが再レンダリング");

  //2000個データを用意
  const data = [...Array(2000).keys()];
  //2000回中の処理を繰り返す
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
