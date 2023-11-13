"use client"

import React, { useState } from "react";
import { Button } from "../providers";
import rules from "../../../utils/rules.json";

const RuleList = () => {
  const [json, setJson] = useState(JSON.stringify(rules, null, 2));
  const [isEditing, setIsEditing] = useState(false);

  const handleJsonChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    setJson(newValue);
  };

  const handleUpdateClick = () => {
    try {
      const updatedJson = JSON.parse(json);
      console.log("JSON đã chỉnh sửa:", updatedJson);
      setIsEditing(false);
    } catch (error) {
      console.error("Lỗi xử lý JSON:", error);
    }
  };

  return (
    <section className="relative flex flex-col px-6 py-10">
      <h1 className="font-semibold text-3xl text-gray-600 pb-10">Chính sách</h1>
      <div className="px-5 flex flex-col gap-5">
        {isEditing ? (
          <textarea
            value={json}
            onChange={handleJsonChange}
            rows={20}
            cols={40}
          />
        ) : (
          rules.map((rule) => (
            <div className="space-x-1 text-lg text-gray-600" key={rule.id}>
              <span className="font-semibold">
                {rule.id}. {rule.title}:
              </span>
              <span className="font-medium">{rule.description}</span>
            </div>
          ))
        )}

        <div className="relative flex justify-center pt-5">
          {isEditing ? (
            <Button title="Cập nhập" style="text-xl py-3" onClick={handleUpdateClick} />
          ) : (
            <Button title="Chỉnh sửa" style="text-xl py-3" onClick={() => setIsEditing(true)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default RuleList;
