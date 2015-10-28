
var React = require('react');
var IconBase = require('../IconBase');

export default class GoOcticonLink extends React.Component {
    render() {
        return (
            <IconBase viewBox="0 0 1024 1024.032" {...this.props}>
                <g><path d="m256 576.001h64v64h-64c-96 0-192-108-192-224s99-224 192-224h256c93 0 192 108 192 224 0 90-58 174-128 208v-74c37-29 64-81 64-134 0-82-65-160-128-160h-256c-63 0-128 78-128 160s64 160 128 160z m576-192h-64v64h64c64 0 128 78 128 160s-65 160-128 160h-256c-63 0-128-78-128-160 0-53 27-105 64-134v-74c-70 34-128 118-128 208 0 116 99 224 192 224h256c93 0 192-108 192-224s-96-224-192-224z"/></g>
            </IconBase>
        );
    }
}