
# Custom React Hooks Collection

Este repositorio contiene una colección de cuatro custom hooks para React que puedes utilizar en tus proyectos. Estos hooks están diseñados para abordar situaciones comunes al desarrollar aplicaciones con React, proporcionando una funcionalidad reutilizable y modular.

## Lista de Custom Hooks

### 1. useCounter

Este hook te permite gestionar de manera sencilla un contador en tus componentes de React. Puedes incrementar, decrementar y reiniciar el contador según tus necesidades.

#### Ejemplo de Uso:

```jsx
import { useCounter } from 'ruta-del-hook';

const MiComponente = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
      <button onClick={reset}>Reiniciar</button>
    </div>
  );
};
```

### 2. useFetch

Este hook simplifica las operaciones de fetch en tus componentes React. Maneja la carga, el error y los datos de manera eficiente, proporcionando un flujo de trabajo más limpio para las solicitudes HTTP.

#### Ejemplo de Uso:

```jsx
import { useFetch } from 'ruta-del-hook';

const MiComponente = () => {
  const { data, isLoading, hasError, error } = useFetch('https://api.ejemplo.com/data');

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p>Datos: {JSON.strigify(data)}</p>
    </div>
  );
};
```

### 3. useForm

Este hook simplifica la gestión de formularios en React, proporcionando funciones para manejar el estado del formulario, los cambios en los campos y la presentación de mensajes de validación.

#### Ejemplo de Uso:

```jsx
import { useForm } from 'ruta-del-hook';

const MiFormulario = () => {
  const { formState, onInputChange, onResetForm } = useForm({ nombre: '', email: '' });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nombre" value={formState.nombre} onChange={onInputChange} />
      <input type="email" name="email" value={formState.email} onChange={onInputChange} />
      <button type="submit">Enviar</button>
    </form>
  );
};
```

### 4. useTodo

Este hook facilita la gestión de tareas (todos) en aplicaciones React. Puedes agregar, marcar como completada y eliminar tareas de manera sencilla.

#### Ejemplo de Uso:

```jsx
import { useTodo } from 'ruta-del-hook';

const MiListaDeTareas = () => {
  const { todos, todosCount, pendingTodosCount, handleToggleTodo, handleNewTodo, handleDeleteTodo } = useTodo();

  return (
		<>
			<h1>
				TodoApp {todosCount} {" "}
				<small>
					pending: { pendingTodosCount}
				</small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					{/* Todo List */}
					<TodoList
						todos={todos}
						onRemoveTodo={handleDeleteTodo}
						handleToggleTodo={handleToggleTodo}
					/>
				</div>
				<div className="col-5">
					<h4>Add TODO</h4>
					<hr />
					<TodoAdd onAddTodo={handleNewTodo} />
				</div>
			</div>
		</>
  );
};
```

## Contribución

Siéntete libre de contribuir a este repositorio. Puedes sugerir mejoras, reportar problemas o agregar nuevos custom hooks que puedan ser útiles para la comunidad de desarrolladores de React.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles.

--- 

Recuerda reemplazar "ruta-del-hook" con la ruta real donde estarán alojados tus custom hooks en npm.