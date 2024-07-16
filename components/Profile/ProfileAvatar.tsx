import Image from "next/image"

type ProfileAvatarProps = {
    imageUrl: string;
    width?: number;
    height?: number;
};

function ProfileAvatar({
    imageUrl,
    width = 42,
    height = 42,
  }: ProfileAvatarProps) {
    return (
      <Image
        src={imageUrl}
        alt="Avatar picture"
        width={width}
        height={height}
        className="rounded-full border-2 border-ink"
      />
    );
  }
export { ProfileAvatar };