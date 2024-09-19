import React, { useRef, MutableRefObject } from "react";
import { Editor } from "@toast-ui/react-editor";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js";
import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

interface contetDataType {
    contentData: MutableRefObject<string>;
}

// TODO: Editor 에서 지워도 View 동기화 잘 안되는 문제 해결하기
// TODO: 이미지 업로드 처리
const ToastEditor: React.FC<contetDataType> = ({ contentData }) => {
    const editorRef = useRef<Editor>(null);
    const toolbarItems = [
        ["heading", "bold", "italic", "strike"],
        ["hr"],
        ["ul", "ol", "task"],
        ["table", "link"],
        ["image"],
        ["code"],
        ["scrollSync"],
    ];

    const handleChange = () => {
        contentData.current = editorRef.current?.getInstance().getHTML();
    };

    return (
        <>
            <Editor
                initialValue={contentData.current}
                previewStyle="vertical"
                height="1000px"
                initialEditType="markdown"
                useCommandShortcut={true}
                toolbarItems={toolbarItems}
                ref={editorRef}
                onChange={handleChange}
                plugins={[codeSyntaxHighlight]}
            />
        </>
    );
};

export default ToastEditor;
