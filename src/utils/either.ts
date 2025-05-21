/** The left value of an {@link Either} is often an error, due to the right-bias of TS. */
export type Left<E = never> = {
  tag: "Left";
  value: E;
};

/** The right value of an {@link Either} is often a success, due to the right-bias of TS. */
export type Right<A = never> = {
  tag: "Right";
  value: A;
};

/** An Either represents one of two potential values discriminated by a tag. */
export type Either<E = never, A = never> = Left<E> | Right<A>;

/** Construct a {@link Left} {@link Either}, usually used for error states. */
export const left = <E = never, A = never>(left: E): Either<E, A> =>
  ({
    tag: "Left",
    value: left,
  }) satisfies Left<E>;

/** Construct a {@link Right} {@link Either}, usually used for success states. */
export const right = <E = never, A = never>(right: A): Either<E, A> =>
  ({
    tag: "Right",
    value: right,
  }) satisfies Right<A>;

export const isLeft = <E = never, A = never>(ma: Either<E, A>): ma is Left<E> =>
  ma.tag === "Left";
export const isRight = <E = never, A = never>(
  ma: Either<E, A>
): ma is Right<A> => ma.tag === "Right";
