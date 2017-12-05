<template>
  <section class="discuss">
      <div class="discuss-list" v-for="(discuss,index) in discusslist" :key="index">
        <div class="discuss-list-title">
            <img :src="discuss.thumb" alt="">
            <div class="discuss-list-title-message">
                <h4>{{discuss.name}}</h4>
                <p>{{discuss.time}}</p>
            </div>
            <button>+关注</button>
        </div>
        <div class="discuss-list-page">
            {{discuss.page}}
        </div>
        <ul class="discuss-list-pic">
            <li><img :src="discuss.shatumb" alt=""></li>
            <li><img :src="discuss.shatumb" alt=""></li>
            <li class="last"><img :src="discuss.shatumb" alt=""></li>
        </ul>
      </div>
  </section>
</template>
<script>
export default {
    name:"discuss",
    props:["discusslist"]
};
</script>
<style lang="scss">
@import "../../../assets/scss/_index.scss";
.discuss{
    &-list{
        padding-left: px2rem(24);
        padding-right: px2rem(24);
        &-title{
            padding-top: px2rem(63);
            display: flex;
            margin-bottom: px2rem(28);
            &-message{
                margin-left: px2rem(45);
                h4{
                    font-weight: bold;
                    font-size: px2rem(30);
                    margin-bottom: px2rem(22);
                }
                p{
                    font-size: px2rem(24);
                    color: #979797;
                    font-weight: bold;
                }
            }
            button{
                position: absolute;
                right: 0;
                width: px2rem(103);
                height: px2rem(50);
                outline: none;
                border: 1px solid #cfa767;
                background-color: #cfa767;
                color: white;
                
            }
        }
        &-page{
            width: 100%;
            font-size: px2rem(24);
            font-weight: bold;
            color: #979797;
            line-height: px2rem(35);
            margin-bottom: px2rem(28);
        }
        &-pic{
            display: flex;
            width: 100%;
            li{
                width: 33%;
                padding-right: px2rem(30);
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>
