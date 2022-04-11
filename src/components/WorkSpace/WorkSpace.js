import React, { useState, useEffect, useCallback, useMemo } from "react";
import SimpleMDE from "react-simplemde-editor"; // EasyMDEをラップしたコンポーネント
import "easymde/dist/easymde.min.css";

export default function WorkSpace() {
  const [note, setNote] = useState("Enter the note");
  const [cmInstance, setCmInstance] = useState(null);
  const getCmInstanceCallback = useCallback(editor => {
    setCmInstance(editor);
  }, []);

  const onChange = value => {
    setNote(value);
  };

  useEffect(() => {
    if (!cmInstance) return;
    cmInstance.doc.clearHistory();
  }, [cmInstance]);

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    };
  }, []);

  // React SimpleMDEでは`getCodemirrorInstance`というpropsで
  // CodeMirrorインスタンスを取り出せる
  return (
    <SimpleMDE
      value={note}
      onChange={onChange}
      getCodemirrorInstance={getCmInstanceCallback}
    />
  );
}
