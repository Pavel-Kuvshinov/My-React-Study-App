import { Component, ReactNode } from 'react';
import Header from '../4_widgets/header/header';

interface Props {
    children: ReactNode;
    handleRequest: (request: string) => void;
}

class ErrorBoundary extends Component<Props> {
    state = { error: null };

    componentDidCatch(error: Error) {
        this.setState({
            error,
        });
    }

    render() {
        if (this.state.error) {
            return (
                <>
                    <Header handleRequest={this.props.handleRequest} />
                    <main className="main">
                        <div className="main__wrapper">
                            <p className="main__item_text-bigger">Something went wrong.</p>
                            <p className="main__item_text-bigger">If you want, you can try to search something...</p>
                        </div>
                    </main>
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
