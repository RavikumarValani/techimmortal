import React, { useState } from "react";

export default function Desc({ title, descriptions = [], setDescriptions, deleteDesc }) {
    // Add a new textarea at the current level
    const addTextarea = (parentId, level = 1) => {
        const addNestedField = (nodes) =>
            nodes.map((node) => {
                if (node.id === parentId) {
                    node.children.push({ id: Date.now(), text: "", children: [] });
                } else if (node.children.length > 0) {
                    node.children = addNestedField(node.children);
                }
                return node;
            });

        if(!Array.isArray(descriptions)){
            descriptions = [descriptions];
        }
        const updatedDescriptions = addNestedField([...descriptions]);
        setDescriptions(updatedDescriptions);
    };

    // Delete a textarea node and its children
    const deleteTextarea = (idToDelete) => {
        const deleteNode = (nodes) =>
            nodes
                .filter((node) => node.id !== idToDelete)
                .map((node) => ({
                    ...node,
                    children: deleteNode(node.children),
                }));

        const updatedDescriptions = deleteNode([...descriptions]);
        setDescriptions(updatedDescriptions);
    };

    // Handle input changes for textareas
    const handleInputChange = (id, value) => {
        const updateText = (nodes) =>
            nodes.map((node) => {
                if (node.id === id) {
                    node.text = value;
                } else if (node.children.length > 0) {
                    node.children = updateText(node.children);
                }
                return node;
            });

        const updatedDescriptions = updateText([...descriptions]);
        setDescriptions(updatedDescriptions);
    };

    // Recursive render function to display textareas and buttons
    const renderTextareas = (nodes, level = 1) => {
        if(!Array.isArray(nodes)){
            nodes = [nodes];
        }
        return nodes.map((node) => (
            <div key={node.id} style={{ marginLeft: `${level * 20}px` }} className="relative w-full mb-3">
                {level === 1 && (
                    <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor={`description-${node.id}`}
                    >
                        {title}
                    </label>
                )}
                <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150"
                    rows="2"
                    cols="50"
                    required={true}
                    name="description"
                    placeholder={`Description Level ${level}`}
                    value={node.text}
                    onChange={(e) => handleInputChange(node.id, e.target.value)}
                ></textarea>
                {level != 1 && (
                    <svg onClick={() => deleteTextarea(node.id)} className="h-8 w-8 text-red-500 inline-block cursor-pointer mb-3 align-top ml-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                )}
                {(node.id !== 1 && level == 1) && (
                    <svg onClick={() => deleteDesc(node.id)} className="h-8 w-8 text-red-500 inline-block cursor-pointer mb-3 align-top ml-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />  <line x1="4" y1="7" x2="20" y2="7" />  <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                )}
                {/* Render children recursively */}
                {node.children.length > 0 && renderTextareas(node.children, level + 1)}
            </div>
        ));
    };

    return (
        <>
            <div className="w-full lg:w-12/12">
                {renderTextareas(descriptions)}
            </div>
        </>
    );
}
