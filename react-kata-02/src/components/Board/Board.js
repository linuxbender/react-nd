/**
 * File: Board.js
 * Author: [linuxbender]
 * Description: This file contains the implementation of the Board component, which enables drag and drop functionality.
 * Date: [29042024]
 */

import { useEffect } from "react";
import "./Board.css";

const Board = () => {
  let srcElement = null;
  const handleDragStart = (e) => {
    if (e.target) {
      e.target.style.opacity = "0.4";
      if (e.dataTransfer) {
        srcElement = e;
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.innerHTML);
      }
    }
  };

  const handleDragEnd = (e) => {
    if (e.target) {
      e.target.style.opacity = "1";
      e.target.classList.remove("over");
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    if (e.target) {
      e.target.classList.add("over");
    }
  };

  const handleDragLeave = (e) => {
    if (e.target) {
      e.target.classList.remove("over");
    }
  };

  const handleDrop = (e) => {
    e.stopPropagation();
    if (e.target) {
      if (e.dataTransfer) {
        srcElement.target.innerHTML = e.target.innerHTML;
        e.target.innerHTML = e.dataTransfer.getData("text/html");
        e.target.classList.remove("over");
      }
    }
  };

  useEffect(() => {
    let list = document.querySelectorAll(".container .box");
    list.forEach((item) => {
      item.addEventListener("dragstart", handleDragStart);
      item.addEventListener("dragover", handleDragOver);
      item.addEventListener("dragenter", handleDragEnter);
      item.addEventListener("dragleave", handleDragLeave);
      item.addEventListener("dragend", handleDragEnd);
      item.addEventListener("drop", handleDrop);
      item.classList.remove("over");
      item.style.opacity = "1";
    });
    return () => {
      list.forEach((item) => {
        item.removeEventListener("dragstart", handleDragStart);
        item.removeEventListener("dragover", handleDragOver);
        item.removeEventListener("dragenter", handleDragEnter);
        item.removeEventListener("dragleave", handleDragLeave);
        item.removeEventListener("dragend", handleDragEnd);
        item.removeEventListener("drop", handleDrop);
      });
    };
  });

  return (
    <div>
      <p>Drag and Drop</p>
      <div className="container">
        <div draggable="true" className="box">
          A
        </div>
        <div draggable="true" className="box">
          B
        </div>
        <div draggable="true" className="box">
          C
        </div>
      </div>
    </div>
  );
};

export default Board;
