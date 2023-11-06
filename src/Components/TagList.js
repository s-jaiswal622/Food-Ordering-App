import React from 'react';
import Chip from '../Common/Chip';
import Card from '../Common/Card';

function TagList({ tags, selectedTags = '', onTagSelect }) {
    const updatedTag = [{
        "id": "all",
        "label": "All"
      }, ...tags ];

  return (
    <div className="tag-list">
    <Card>
      {updatedTag.map((tag) => (
        <div key={tag.id} onClick={() => onTagSelect(tag.id)}>
        <Chip label={tag.label} className={selectedTags === tag.id ? "selected-tag" : 'unselected-tag'}/>
        </div>
      ))}
    </Card>
     </div>
  );
}

export default TagList;
