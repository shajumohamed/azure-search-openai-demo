import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "what are the capabilities in the organization?",
        value: "what are the capabilities in KEO International Consultants?"
    },
    { text: "What is the scope of work in Riyadh - Sedra Phase 3, 4 and 5?", value: "What is the scope of work in Riyadh - Sedra Phase 3, 4 and 5?" },
    { text: "What does a Project Manager do?", value: "What does a Project Manager do?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
