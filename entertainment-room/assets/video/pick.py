import numpy as np,glob,shutil
from PIL import Image
fs=sorted(glob.glob('cand/*.jpg'));S=[];G=[]
for f in fs:
    a=np.asarray(Image.open(f).convert('L').resize((150,267)),dtype=float)
    lap=(a[1:-1,1:-1]*4-a[:-2,1:-1]-a[2:,1:-1]-a[1:-1,:-2]-a[1:-1,2:]).var()
    S.append((lap,a.mean(),a.std()));G.append(a)
n=len(fs);diff=[0]+[np.abs(G[i]-G[i-1]).mean() for i in range(1,n)]
ok=[i for i in range(n) if S[i][1]>25 and S[i][2]>20 and diff[i]<30]
K=16;chosen=[]
for w in range(K):
    lo,hi=n*w//K,n*(w+1)//K
    c=[i for i in ok if lo<=i<hi]
    c.sort(key=lambda i:-S[i][0])
    for i in c:
        if all(np.abs(G[i]-G[j]).mean()>9 for j in chosen): chosen.append(i);break
print(len(chosen),[(i/4,round(S[i][0])) for i in chosen])
import os;os.makedirs('stills',exist_ok=True)
for k,i in enumerate(chosen): Image.open(fs[i]).save(f'stills/still_{k+1:02d}_t{i/4:05.2f}s.jpg',quality=85)
