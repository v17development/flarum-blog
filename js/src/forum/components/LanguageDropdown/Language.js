import Component from 'flarum/Component';

export default class Language extends Component {
    init() {
        this.languages = app.store.all('discussion-languages');
        this.options = this.languages.reduce((o, lang) => {
            o[lang.code()] = (
                <span>
                    <i className={"fas fa-globe"} /> {lang.name()}
                </span>
            );

            return o;
        }, this.props.extra || {});
    }

    view() {
        const { language, uppercase } = this.props;
        const name = language.name() || '';

        return (
            <span>
                <i className={"fas fa-globe"} />
                &nbsp;
                {uppercase ? name.toUpperCase() : name}
            </span>
        );
    }
}
