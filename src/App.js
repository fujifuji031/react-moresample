import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildrenArea";
import "./styles.css";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  //アロー関数で書くと毎回新しい関数を生成している→処理は同じでも渡すpropsが変化している
  //useCallbackを使うことで、第2引数に設定された変数に変更があったときだけ新しく関数を生成する処理に変えられる
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  //useMemoを使うことで変数のmemo化が可能(新しい変数を変数を生成しない)
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);
  const onChangeText = (event) => setText(event.target.value);
  const onClickOpen = () => setOpen(!open);
  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
