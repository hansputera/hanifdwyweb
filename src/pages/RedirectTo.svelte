<script>
import { useLocation, navigate } from 'svelte-navigator';

const location = useLocation();
switch($location.hash.slice(1).toLowerCase()) {
    case 'github':
      navigate('https://github.com/hansputera', { replace: true });
      break;
    case 'twitter':
    case 'twt':
    case 'twit':
      navigate('https://twitter.com/hanifdwypoetra', { replace: true });
      break;
    default:
      break;
  }
</script>

<p class="text-4xl text-center">Hm?</p>
