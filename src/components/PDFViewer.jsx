import React, { useEffect, useRef, useState } from 'react';
import * as pdfjs from 'pdfjs-dist';
pdfjs.GlobalWorkerOptions.workerSrc = window.location.origin + '/pdf.worker.min.mjs';

const PDFViewer = ({url}) => {
    const canvasRef = useRef(null);

    const fileName = url.substring(url.lastIndexOf('/') + 1);

    const [width, setWidth] = useState(null);
    const [height, setHeight] = useState(null);

    useEffect(() => {

        const renderPDF = async () => {

            const loadingTask = pdfjs.getDocument(url);
            const pdf = await loadingTask.promise;
            const page = await pdf.getPage(1);
            const viewport = page.getViewport({scale: 2});
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            setHeight(viewport.height);
            setWidth(viewport.width);
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            const renderContext = {

                canvasContext: context,
                viewport: viewport

            };

            await page.render(renderContext).promise;

        };

        renderPDF();

    }, [url]);

    return  <a href={url} target="_blank">
                <div className="pdf-viewer" style={{height: height / 5}}>
                    <div className="download"></div>
                    <span className="file-name">{fileName}</span><canvas style={{width: width / 5, height: height / 5}}data-name={fileName} ref={canvasRef}/>
                </div>
            </a>;

};

export default PDFViewer;