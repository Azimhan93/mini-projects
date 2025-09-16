/* import { useForm } from "react-hook-form";

export default function RegisterForm() {
  // деструктурируем хук
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // обработчик сабмита
  function onSubmit(data) {
    alert(`Welcome, ${data.name}! Your email: ${data.email}`);
    reset(); // очистка формы
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12, maxWidth: 360 }}>
      <label>
        Name:
        <input {...register("name", { required: "Name is required" })} />
        {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
      </label>

      <label>
        Email:
        <input type="email" {...register("email", { 
          required: "Email is required", 
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } 
        })} />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
      </label>

      <label>
        Password:
        <input type="password" {...register("password", { 
          required: "Password is required", 
          minLength: { value: 6, message: "Password must be at least 6 characters" } 
        })} />
        {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
      </label>

      <button type="submit">Register</button>
      <button type="button" onClick={() => reset()}>Clear</button>
    </form>
  );
} */

/* import { useForm } from "react-hook-form";  

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset }
  = useForm({ defaultValues: { name: "", email: "", password: "" }, mode: "onChange" });

  function onSubmit(data) {
    alert(`Welcome, ${data.name}! Your email: ${data.email}`);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12, maxWidth: 360 }}>
      <label>
        Name:
        <input
          autoComplete="name"
          aria-invalid={!!errors.name || undefined}
          {...register("name", {
            required: "Username is required",
            minLength: { value: 3, message: "At least 3 chars" },
            setValueAs: v => v.trim(),
          })}
        />
        {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
      </label>

      <label>
        Email:
        <input type="email" {...register("email", { 
          required: "Email is required", 
          pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" } 
        })} />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
      </label>

      <label>
        Password:
        <input type="password" {...register("password", { 
          required: "Password is required", 
          minLength: { value: 6, message: "Password must be at least 6 characters" } 
        })} />
        {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
      </label>

      <button type="submit" disabled={!isValid || isSubmitting}>
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
      <button type="button" onClick={() => reset()}>Clear</button>
    </form>
  );
} */

/* import { useForm } from "react-hook-form";

export default function FeedbackForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      rating: "",
      agree: false,
    },
    mode: "onChange",
  });

  function onSubmit(data) {
    const ratingNum = Number(data.rating);
    alert(
      `Thanks, ${data.name}!\nRating: ${ratingNum}\nMessage:\n${data.message}`
    );
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "grid", gap: 12, maxWidth: 420 }}
    >
     
      <label>
        Name:
        <input
          autoComplete="name"
          aria-invalid={!!errors.name || undefined}
          {...register("name", {
            required: "Username is required",
            minLength: { value: 3, message: "At least 3 chars" },
            setValueAs: (v) => v.trim(),
          })}
        />
      </label>
      {errors.name && (
        <span role="alert" style={{ color: "crimson" }}>
          {errors.name.message}
        </span>
      )}


      <label>
        Email:
        <input
          type="email"
          autoComplete="email"
          aria-invalid={!!errors.email || undefined}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
          })}
          placeholder="you@example.com"
        />
      </label>
      {errors.email && (
        <span role="alert" style={{ color: "crimson" }}>
          {errors.email.message}
        </span>
      )}


      <label>
        Message:
        <textarea
          rows={4}
          aria-invalid={!!errors.message || undefined}
          placeholder="Your message..."
          {...register("message", {
            required: "Message is required",
            minLength: { value: 10, message: "At least 10 chars" },
            setValueAs: (v) => v.trim(),
          })}
        />
      </label>
      {errors.message && (
        <span role="alert" style={{ color: "crimson" }}>
          {errors.message.message}
        </span>
      )}


      <fieldset style={{ border: "1px solid #ddd", padding: 12 }}>
        <legend>Rating</legend>

        {[1, 2, 3, 4, 5].map((n) => (
          <label key={n} style={{ marginRight: 12 }}>
            <input
              type="radio"
              value={String(n)}
              {...register("rating", { required: "Choose rating" })}
            />{" "}
            {n}
          </label>
        ))}
      </fieldset>
      {errors.rating && (
        <span role="alert" style={{ color: "crimson" }}>
          {errors.rating.message}
        </span>
      )}

 
      <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          type="checkbox"
          aria-invalid={!!errors.agree || undefined}
          {...register("agree", { required: "You must agree" })}
        />
        I agree to terms
      </label>
      {errors.agree && (
        <span role="alert" style={{ color: "crimson" }}>
          {errors.agree.message}
        </span>
      )}

 
      <div style={{ display: "flex", gap: 8 }}>
        <button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? "Submitting..." : "Send feedback"}
        </button>
        <button type="button" onClick={() => reset()}>
          Clear
        </button>
      </div>
    </form>
  );
} */

/* import { useForm } from "react-hook-form";

export default function RegForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      rating: "",
      agree: false,
    },
    mode: "onChange",
  });

  function onSubmit(data) {
    alert(
      `Hello, ${data.name}! You are: ${data.rating} and your email is ${data.email}`
    );
    reset();
  }

  return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: "grid", gap: 12, maxWidth: 420 }}
      >
       
        <label>
          Name:
          <input
            autoComplete="name"
            aria-invalid={!!errors.name || undefined}
            {...register("name", {
              required: "Username is required",
              minLength: { value: 3, message: "At least 3 chars" },
              setValueAs: (v) => v.trim(),
            })}
          />
        </label>
        {errors.name && (
          <span role="alert" style={{ color: "crimson" }}>
            {errors.name.message}
          </span>
        )}
  
  
        <label>
          Email:
          <input
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email || undefined}
            {...register("email", {
              required: "Email is required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
            })}
            placeholder="you@example.com"
          />
        </label>
        {errors.email && (
          <span role="alert" style={{ color: "crimson" }}>
            {errors.email.message}
          </span>
        )}
  
  
      <label>
        Password:
        <input type="password" {...register("password", { 
          required: "Password is required", 
          minLength: { value: 6, message: "Password must be at least 6 characters" } 
        })} />
        {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}
      </label>

      <label>
        Confirm password:
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === watch("password") || "Passwords do not match",
          })}
        />
      </label>
      {errors.confirmPassword && (
        <span style={{ color: "red" }}>{errors.confirmPassword.message}</span>
      )}
  
  
        <fieldset style={{ border: "1px solid #ddd", padding: 12 }}>
          <legend>Rating</legend>
  
          {['user', 'admin', 'moderator'].map((n) => (
            <label key={n} style={{ marginRight: 12 }}>
              <input
                type="radio"
                value={String(n)}
                {...register("rating", { required: "Choose rating" })}
              />{" "}
              {n}
            </label>
          ))}
        </fieldset>
        {errors.rating && (
          <span role="alert" style={{ color: "crimson" }}>
            {errors.rating.message}
          </span>
        )}
  
   
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="checkbox"
            aria-invalid={!!errors.agree || undefined}
            {...register("agree", { required: "You must agree" })}
          />
          I agree to terms
        </label>
        {errors.agree && (
          <span role="alert" style={{ color: "crimson" }}>
            {errors.agree.message}
          </span>
        )}
  
   
        <div style={{ display: "flex", gap: 8 }}>
          <button type="submit" disabled={!isValid || isSubmitting}>
            {isSubmitting ? "Submitting..." : "Send feedback"}
          </button>
          <button type="button" onClick={() => reset()}>
            Clear
          </button>
        </div>
      </form>
    );
} */



