import { Component, ReactNode } from 'react';
import Header from '../header/header';
import ErrorSection from '../errorSection/errorSection';

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
                    <ErrorSection />
                </>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
