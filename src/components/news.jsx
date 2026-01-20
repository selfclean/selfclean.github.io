import React from 'react';
import { marked } from 'marked';

export default class News extends React.Component {
  render() {
    if (!this.props.updates || this.props.updates.length === 0) return null;
    return (
      <div className="uk-section uk-padding-remove-bottom">
        <h2 className="uk-heading-line uk-text-center uk-text-bold">
          <span>Updates</span>
        </h2>
        <div className="uk-alert-primary" data-uk-alert>
          <ul className="uk-list uk-list-bullet">
            {this.props.updates.map((update, idx) => (
              <li
                key={idx}
                dangerouslySetInnerHTML={{ __html: marked.parseInline(update) }}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
