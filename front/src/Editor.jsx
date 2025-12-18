import React, { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import Quill from 'quill';

const Editor = forwardRef(({ readOnly, defaultValue, onSelectionChange, onTextChange }, ref) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const editorContainer = container.appendChild(container.ownerDocument.createElement('div'));
    const quill = new Quill(editorContainer, { theme: 'snow' });

    ref.current = quill; // On assigne l'instance à la ref parente

    if (defaultValue) {
      quill.setContents(defaultValue);
    }

    return () => {
      ref.current = null;
      container.innerHTML = '';
    };
  }, [ref]);

  return <div ref={containerRef}></div>;
});

Editor.displayName = 'Editor';
export default Editor;