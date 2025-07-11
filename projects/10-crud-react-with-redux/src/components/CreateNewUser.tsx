// js
// react
import { useState } from 'react';
// third
import { Badge, Button, Card, TextInput, Title } from '@tremor/react';
// own
import { useUserActions } from '../hooks/useUserActions';
import type { IUser } from '../store/users/slice';

function CreateNewUser() {
    const { handleNewUser } = useUserActions();
    const [result, setResult] = useState<'ok' | 'ko' | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setResult(null);

        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        const name = formData.get('name') as string;
        const email = formData.get('email') as string;
        const github = formData.get('github') as string;

        if (!name || !email || !github) { // validations
            return setResult('ko');
        }

        const user: IUser = {
            name,
            email,
            github,
        }

        handleNewUser(user);
        setResult('ok');
        form.reset();
    }

    return (
        <Card style={{
            marginTop: '16px',
            padding: '20px',
            borderRadius: '8px'
        }}>
            <Title style={{
                marginTop: '0'
            }}>
                Create New User
            </Title>
            <form onSubmit={handleSubmit}>
                <TextInput
                    name='name'
                    placeholder='Aquí el name'
                />
                <TextInput
                    name='email'
                    placeholder='Aquí el email'
                />
                <TextInput
                    name='github'
                    placeholder='Aquí el username GitHub'
                />
                <div>
                    <Button
                        type='submit'
                        style={{
                            marginTop: '16px'
                        }}
                    >
                        Create User
                    </Button>
                    <span>
                        {
                            result === 'ok' && <Badge style={{
                                color: 'green',
                                marginLeft: '10px',
                                padding: '5px',
                                borderRadius: '8px'
                            }}>Guardado correctamente.</Badge>
                        }
                        {
                            result === 'ko' && <Badge style={{
                                color: 'red',
                                marginLeft: '10px',
                                padding: '5px',
                                borderRadius: '8px'
                            }}>Error al crear user.</Badge>
                        }
                    </span>
                </div>
            </form>
        </Card>
    )
}

// exports.
export default CreateNewUser;