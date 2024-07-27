export default function NaverSocialLoginPage() {
    const code = new URL(document.location.toString()).searchParams.get('code');
    console.log(code);
    return <div>123</div>;
}
